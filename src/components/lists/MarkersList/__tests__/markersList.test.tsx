import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { MarkersList } from '../MarkersList';
import {
  ButtonElements,
  NEW_MARKER_CANDIDATE,
  NEW_SUGGESTED_MARKERS,
  TextElements
} from './test-data';

describe('MarkersList logic', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('sets correct candidate and opens approve dialog on the Approve button click', async () => {
    store.suggestions.setMarkers([NEW_SUGGESTED_MARKERS]);

    renderWithStore(store, <MarkersList />);

    await userEvent.click(screen.getByText(TextElements.MarkerHeader1));
    await userEvent.click(screen.getByText(ButtonElements.Approve));

    screen.getByText(TextElements.ApproveDialogTitle);
    expect(store.suggestions.markerCandidate).toStrictEqual(
      NEW_MARKER_CANDIDATE
    );
  });

  it('sets correct candidate and opens decline dialog on the Decline button click', async () => {
    store.suggestions.setMarkers([NEW_SUGGESTED_MARKERS]);

    renderWithStore(store, <MarkersList />);

    await userEvent.click(screen.getByText(TextElements.MarkerHeader1));
    await userEvent.click(screen.getByText(ButtonElements.Decline));

    screen.getByText(TextElements.DeclineDialogTitle);
    expect(store.suggestions.markerCandidate).toStrictEqual({
      id: NEW_SUGGESTED_MARKERS.id
    });
  });
});
