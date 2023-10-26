import { screen } from '@testing-library/react';
import { IRootStore } from '@store/RootStore';
import { noop } from '@utils/helpers';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { DeclineConfirmationDialog } from '../DeclineConfirmationDialog';
import {
  TextElements,
  ButtonElements,
  NEW_MARKER_CANDIDATE
} from './test-data';

describe('DeclineConfirmationDialog visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('renders correct dialog elements', () => {
    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <DeclineConfirmationDialog onClose={noop} />);

    screen.getByText(TextElements.Title);
    screen.getByText(TextElements.Description);
    screen.getByText(ButtonElements.Decline);
    screen.getByText(ButtonElements.Cancel);
  });
});
