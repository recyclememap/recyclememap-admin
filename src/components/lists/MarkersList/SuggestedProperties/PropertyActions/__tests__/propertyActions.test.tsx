import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { ProperyActions } from '../PropertyActions';
import { ButtonElements } from './test-data';

describe('PropertyActions logic', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('calss createMarkerPropertyToApprove with correct argument on approve button click', async () => {
    const createMarkerPropertyToApproveSpy = jest.fn();

    renderWithStore(
      store,
      <ProperyActions
        createMarkerPropertyToApprove={createMarkerPropertyToApproveSpy}
      />
    );

    await userEvent.click(screen.getByTitle(ButtonElements.Approve));

    expect(createMarkerPropertyToApproveSpy).toBeCalledTimes(1);
    expect(createMarkerPropertyToApproveSpy).toBeCalledWith(true);
  });

  it('calss createMarkerPropertyToApprove with correct argument on apdeclinerove button click', async () => {
    const createMarkerPropertyToApproveSpy = jest.fn();

    renderWithStore(
      store,
      <ProperyActions
        createMarkerPropertyToApprove={createMarkerPropertyToApproveSpy}
      />
    );

    await userEvent.click(screen.getByTitle(ButtonElements.Decline));

    expect(createMarkerPropertyToApproveSpy).toBeCalledTimes(1);
    expect(createMarkerPropertyToApproveSpy).toBeCalledWith(false);
  });
});
