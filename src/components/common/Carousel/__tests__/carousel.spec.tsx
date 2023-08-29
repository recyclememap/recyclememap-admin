import { render, screen } from '@testing-library/react';
import { Carousel } from '../Carousel';
import { Childrens, TestIds } from './test-data';

describe('Carousel visual', () => {
  it('renders correct elements', async () => {
    render(<Carousel>{Childrens}</Carousel>);

    screen.getByTestId(TestIds.NextItem);
    screen.getByTestId(TestIds.PreviousItem);
  });
});
