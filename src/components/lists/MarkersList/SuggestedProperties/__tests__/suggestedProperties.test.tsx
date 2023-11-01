import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MarkerProperties } from '@store/domains/Suggestions/types';
import { IRootStore } from '@store/RootStore';
import { noop } from '@utils/helpers';
import { createStore, renderWithStore } from '@utils/tests/helpers';
import { SuggestedProperties } from '../SuggestedProperties';
import {
  NEW_SUGGESTED_MARKERS,
  CURRENT_NEW_MARKER,
  SUGGESTED_MARKERS,
  CURRENT_SUGGESTED_MARKER,
  TextElements,
  ButtonElements,
  NEW_PROPERTY_CANDIDATE,
  DECLINE_PROPERTY_CANDIDATE
} from './test-data';

describe('SuggestedProperties logic', () => {
  let store: IRootStore;

  beforeEach(() => {
    store = createStore();
  });

  it('sets current new marker on the new marker propery value click', async () => {
    renderWithStore(
      store,
      <SuggestedProperties
        marker={NEW_SUGGESTED_MARKERS}
        onApprove={noop}
        onDecline={noop}
      />
    );

    await userEvent.click(screen.getByText(MarkerProperties.position));
    await userEvent.click(screen.getByText(TextElements.Lat));

    expect(store.suggestions.currentMarker).toStrictEqual(CURRENT_NEW_MARKER);
  });

  it('sets current property to the marker on the suggested propery value click', async () => {
    store.suggestions.setCurrentMarker(CURRENT_SUGGESTED_MARKER);

    renderWithStore(
      store,
      <SuggestedProperties
        marker={SUGGESTED_MARKERS}
        onApprove={noop}
        onDecline={noop}
      />
    );

    await userEvent.click(screen.getByText(MarkerProperties.address));
    await userEvent.click(
      screen.getByText(SUGGESTED_MARKERS.address.suggestedValue[0])
    );

    expect(store.suggestions.currentMarker).toStrictEqual({
      ...CURRENT_SUGGESTED_MARKER,
      [MarkerProperties.address]: SUGGESTED_MARKERS.address.suggestedValue[0]
    });
  });

  it('sets marker property to approve and calls onApprove callback', async () => {
    const onAproveSpy = jest.fn();

    renderWithStore(
      store,
      <SuggestedProperties
        marker={SUGGESTED_MARKERS}
        onApprove={onAproveSpy}
        onDecline={noop}
      />
    );

    await userEvent.click(screen.getByText(MarkerProperties.address));
    await userEvent.click(screen.getByTitle(ButtonElements.Approve));

    expect(onAproveSpy).toBeCalledTimes(1);
    expect(store.suggestions.markerCandidate).toStrictEqual(
      NEW_PROPERTY_CANDIDATE
    );
  });

  it('sets marker property to decline and calls onDecline callback', async () => {
    const onDeclineSpy = jest.fn();

    renderWithStore(
      store,
      <SuggestedProperties
        marker={SUGGESTED_MARKERS}
        onApprove={noop}
        onDecline={onDeclineSpy}
      />
    );

    await userEvent.click(screen.getByText(MarkerProperties.address));
    await userEvent.click(screen.getByTitle(ButtonElements.Decline));

    expect(onDeclineSpy).toBeCalledTimes(1);
    expect(store.suggestions.markerCandidate).toStrictEqual(
      DECLINE_PROPERTY_CANDIDATE
    );
  });
});
