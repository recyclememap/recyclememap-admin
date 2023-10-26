import { screen } from '@testing-library/react';
import { MarkerProperties } from '@store/domains/Suggestions/types';
import { IRootStore } from '@store/RootStore';
import { noop } from '@utils/helpers';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { ApproveConfirmationDialog } from '../ApproveConfirmationDialog';
import {
  TextElements,
  ButtonElements,
  NEW_MARKER_CANDIDATE,
  NEW_PROPERTY_CANDIDATE
} from './test-data';

describe('ApproveConfirmationDialog visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('renders correct dialog elements', () => {
    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={noop} />);

    screen.getByText(TextElements.Title);
    screen.getByText(ButtonElements.Approve);
    screen.getByText(ButtonElements.Cancel);
  });

  it('renders correct new marker confirmation elements', () => {
    store.suggestions.setMarkerCandidate(NEW_MARKER_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={noop} />);

    screen.getByText(MarkerProperties.position);
    screen.getByText(MarkerProperties.wasteTypes);
    screen.getByText(MarkerProperties.address);
    screen.queryAllByText(TextElements.ApprovedLabel);
    screen.getByText(TextElements.Lat);
    screen.getByText(TextElements.Long);
    screen.getByText(TextElements.WasteTypes);
    screen.getByText(TextElements.Address);
  });

  it('renders correct property confirmation elements', () => {
    store.suggestions.setMarkerCandidate(NEW_PROPERTY_CANDIDATE);

    renderWithStore(store, <ApproveConfirmationDialog onClose={noop} />);

    screen.getByText(MarkerProperties.position);
    screen.getByText(TextElements.ApprovedLabel);
    screen.getByText(TextElements.Lat);
    screen.getByText(TextElements.Long);
    screen.getByText(TextElements.SuggestedLabel);
    screen.getByText(TextElements.SuggestedLat);
    screen.getByText(TextElements.SuggesteLong);
  });
});
