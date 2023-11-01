import { render, screen } from '@testing-library/react';
import { LatLngTuple } from 'leaflet';
import { PositionContent } from '../PositionContent';
import { MOCK_SUGGESTED_POSITION, TextElements } from './test-data';

describe('PositionContent visual', () => {
  it('renders correct elements', () => {
    render(
      <PositionContent
        suggestedPosition={MOCK_SUGGESTED_POSITION as LatLngTuple}
      />
    );

    screen.getByText(TextElements.Lat);
    screen.getByText(TextElements.Long);
  });
});
