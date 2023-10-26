import { render, screen } from '@testing-library/react';
import { WasteTypesContent } from '../WasteTypesContent';
import { WASTE_TYPES, TextElements } from './test-data';

describe('WasteTypesContent visual', () => {
  it('renders correct elements', () => {
    render(<WasteTypesContent suggestedWasteTypes={WASTE_TYPES} />);

    screen.getByText(TextElements.WasteTypes);
  });
});
