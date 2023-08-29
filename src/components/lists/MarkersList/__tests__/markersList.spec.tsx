import { screen } from '@testing-library/react';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { MarkersList } from '../MarkersList';
import { MockMarker, TEST_MARKER_IDS } from './test-data';

describe('SuggestedProperties visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('renders correct elements', () => {
    store.suggestions.setMarkers(MockMarker);
    renderWithStore(store, <MarkersList />);

    TEST_MARKER_IDS.forEach((markerId) => {
      screen.getByText(markerId);
    });
  });
});
