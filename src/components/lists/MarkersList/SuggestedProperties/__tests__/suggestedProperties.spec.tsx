import { render, screen } from '@testing-library/react';
import { SuggestionProperies } from '@store/domains/Suggestions/types';
import { SuggestedProperties } from '../SuggestedProperties';
import { MockMarker, getSuggestedValues } from './test-data';

describe('SuggestedProperties visual', () => {
  it('renders correct elements', () => {
    render(<SuggestedProperties marker={MockMarker} />);

    screen.getByText(SuggestionProperies.position);

    getSuggestedValues().forEach((suggestedValue) => {
      screen.getByText(suggestedValue.Lat);
      screen.getByText(suggestedValue.Long);
    });
  });
});
