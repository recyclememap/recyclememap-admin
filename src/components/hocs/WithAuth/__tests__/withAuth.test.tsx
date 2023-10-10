import { screen, waitFor } from '@testing-library/react';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { WithAuth } from '../WithAuth';
import { ChildElemnt, MOCK_JWT, MOCK_CHILD } from './test-data';

const getAccessTokenSilentlySpy = jest.fn();
const loginWithRedirectSpy = jest.fn();

jest.mock('@auth0/auth0-react', () => ({
  __esModule: true,
  useAuth0: () => {
    return {
      getAccessTokenSilently: getAccessTokenSilentlySpy,
      loginWithRedirect: loginWithRedirectSpy
    };
  }
}));

describe('WithAuth logic', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
    getAccessTokenSilentlySpy.mockResolvedValueOnce(MOCK_JWT);
  });

  it('sets JWT and renders children', async () => {
    renderWithStore(store, <WithAuth>{ChildElemnt}</WithAuth>);

    await waitFor(() => expect(store.auth.authJWT).toBe(MOCK_JWT));
    expect(store.auth.isAuthorized).toBe(true);
    screen.getByText(MOCK_CHILD);
  });

  it('relogins user if state is unathorized', async () => {
    renderWithStore(store, <WithAuth>{ChildElemnt}</WithAuth>);

    await screen.findByText(MOCK_CHILD);

    store.auth.setIsAuthorized(false);

    await waitFor(() => expect(loginWithRedirectSpy).toBeCalledTimes(1));
  });
});
