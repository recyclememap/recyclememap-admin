import { render, screen } from '@testing-library/react';
import { PositionCard } from '../PositionCard';
import { MOCK_SUGGESTED_POSITION, TextElements } from './test-data';

describe('PositionCard visual', () => {
  it('renders correct elements', () => {
    render(<PositionCard suggestedPosition={MOCK_SUGGESTED_POSITION} />);

    screen.getByText(TextElements.Lat);
    screen.getByText(TextElements.Long);
  });
});
