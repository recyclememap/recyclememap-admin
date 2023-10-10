import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { LogoutButton } from '../LogoutButton';
import { TextElements } from './test-data';

const logoutSpy = jest.fn();

jest.mock('@auth0/auth0-react', () => ({
  __esModule: true,
  useAuth0: () => {
    return {
      logout: logoutSpy
    };
  }
}));

describe('LogoutButton logic', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('calls logout on the LogoutButton click', async () => {
    renderWithStore(store, <LogoutButton />);

    const logoutButton = screen.getByText(TextElements.LogoutButton);
    expect(logoutButton).toBeEnabled();

    await userEvent.click(logoutButton);

    expect(logoutSpy).toBeCalledTimes(1);
    expect(logoutButton).toBeDisabled();
  });

  it('shows the notification if logout is failed', async () => {
    logoutSpy.mockRejectedValueOnce({});
    renderWithStore(store, <LogoutButton />);

    const logoutButton = screen.getByText(TextElements.LogoutButton);
    expect(logoutButton).toBeEnabled();

    await userEvent.click(screen.getByText(TextElements.LogoutButton));

    expect(logoutSpy).toBeCalledTimes(1);
    await screen.findByText(TextElements.FailedLogoutMessage);
    expect(logoutButton).toBeEnabled();
  });
});
