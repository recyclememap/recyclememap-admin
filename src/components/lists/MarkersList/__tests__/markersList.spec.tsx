import { screen } from '@testing-library/react';
import { IRootStore } from '@store/RootStore';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { MarkersList } from '../MarkersList';
import { SUGGESTED_MARKERS, TextElements } from './test-data';

describe('MarkersList visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('renders correct elements', () => {
    store.suggestions.setMarkers(SUGGESTED_MARKERS);

    renderWithStore(store, <MarkersList />);

    screen.getByText(TextElements.MarkerHeader1);
    screen.getByText(TextElements.MarkerHeader2);
  });
});
