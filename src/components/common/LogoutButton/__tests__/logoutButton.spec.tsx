import { screen } from '@testing-library/react';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { LogoutButton } from '../LogoutButton';
import { TextElements } from './test-data';

describe('LogoutButton visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('calls logout on the LogoutButton click', async () => {
    renderWithStore(store, <LogoutButton />);

    screen.getByText(TextElements.LogoutButton);
  });
});
