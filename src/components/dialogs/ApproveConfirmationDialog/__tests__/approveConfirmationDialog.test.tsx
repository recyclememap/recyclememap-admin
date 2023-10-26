import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Scope } from 'nock';
import { StatusCodes } from '@common/constants';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { ApproveConfirmationDialog } from '../ApproveConfirmationDialog';
import {
  ButtonElements,
  NEW_MARKER_CANDIDATE,
  SUGGESTED_MARKERS,
  TextElements
} from './test-data';

describe('ApproveConfirmationDialog logic', () => {
  let store: IRootStore;
  let apiMock: Scope;

  beforeEach(() => {
    store = createStore();
    apiMock = (global as any).apiMock;
  });

  it('updates suggested marker on the approve button click and closes dialog', async () => {
    const onCloseSpy = jest.fn();
    const updateMarkerSpy = jest.spyOn(store.suggestions, 'updateMarker');
    const getSuggestedMarkersSpy = jest.spyOn(
      store.suggestions,
      'getSuggestedMarkers'
    );

    apiMock
      .patch(`/markers/${NEW_MARKER_CANDIDATE.id}`, NEW_MARKER_CANDIDATE.marker)
      .once()
      .reply(StatusCodes.NoContent);
    apiMock.get('/markers').once().reply(StatusCodes.Ok, SUGGESTED_MARKERS);

    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={onCloseSpy} />);

    await userEvent.click(screen.getByText(ButtonElements.Approve));

    await screen.findByText(TextElements.SuccessMessage);
    await waitFor(() => expect(onCloseSpy).toBeCalledTimes(1));
    expect(updateMarkerSpy).toBeCalledTimes(1);
    expect(getSuggestedMarkersSpy).toBeCalledTimes(1);
    expect(store.suggestions.markersList).toStrictEqual(SUGGESTED_MARKERS);
  });

  it('closes dialog on the cancel button click', async () => {
    const onCloseSpy = jest.fn();

    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={onCloseSpy} />);

    await userEvent.click(screen.getByText(ButtonElements.Cancel));

    expect(onCloseSpy).toBeCalledTimes(1);
  });

  it('shows error and does not close the dialog on the failed update request', async () => {
    const onCloseSpy = jest.fn();

    apiMock
      .patch(`/markers/${NEW_MARKER_CANDIDATE.id}`, NEW_MARKER_CANDIDATE.marker)
      .once()
      .replyWithError({});
    apiMock.get('/markers').once().reply(StatusCodes.Ok, SUGGESTED_MARKERS);

    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={onCloseSpy} />);

    await userEvent.click(screen.getByText(ButtonElements.Approve));

    await screen.findByText(TextElements.ErrorMessage);
    expect(onCloseSpy).not.toBeCalled();
  });
});
