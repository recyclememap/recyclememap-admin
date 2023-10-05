import { render, screen } from '@testing-library/react';
import { SuggestionProperties } from '@store/domains/Suggestions/types';
import { SuggestedProperties } from '../SuggestedProperties';
import { MockMarker, getSuggestedValues } from './test-data';

// TODO: Add tests for wasteTypes and address as well
describe('SuggestedProperties visual', () => {
  it('renders correct elements', () => {
    render(<SuggestedProperties marker={MockMarker} />);

    screen.getByText(SuggestionProperties.position);

    getSuggestedValues().forEach((suggestedValue) => {
      screen.getByText(suggestedValue.Lat);
      screen.getByText(suggestedValue.Long);
    });
  });
});
