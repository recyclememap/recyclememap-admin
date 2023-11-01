import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MarkerProperties } from '@store/domains/Suggestions/types';
import { IRootStore } from '@store/RootStore';
import { noop } from '@utils/helpers';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { SuggestedProperties } from '../SuggestedProperties';
import { NEW_SUGGESTED_MARKERS, TextElements } from './test-data';

describe('SuggestedProperties visual', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('renders correct elements', async () => {
    renderWithStore(
      store,
      <SuggestedProperties
        marker={NEW_SUGGESTED_MARKERS}
        onApprove={noop}
        onDecline={noop}
      />
    );

    await userEvent.click(screen.getByText(MarkerProperties.position));
    screen.getByText(TextElements.Lat);
    screen.getByText(TextElements.Long);

    await userEvent.click(screen.getByText(MarkerProperties.wasteTypes));
    screen.getByText(TextElements.WasteTypes);

    await userEvent.click(screen.getByText(MarkerProperties.address));
    screen.getByText(TextElements.Address);
  });
});
