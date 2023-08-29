import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from '../Carousel';
import { Childrens, TestIds } from './test-data';

describe('Carousel logic', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
  });

  it('calls callback with correct element position', async () => {
    const onActiveItemChangedMock = jest.fn();

    render(
      <Carousel onActiveItemChanged={onActiveItemChangedMock}>
        {Childrens}
      </Carousel>
    );

    await userEvent.click(screen.getByTestId(TestIds.NextItem));

    expect(onActiveItemChangedMock).toHaveBeenCalledTimes(2);
    expect(onActiveItemChangedMock).toHaveBeenCalledWith(1);

    await userEvent.click(screen.getByTestId(TestIds.PreviousItem));

    expect(onActiveItemChangedMock).toHaveBeenCalledTimes(3);
    expect(onActiveItemChangedMock).toHaveBeenCalledWith(0);
  });

  it('does not show navigation buttons if there is only one child', async () => {
    render(
      <Carousel>
        <div></div>
      </Carousel>
    );

    expect(screen.queryByTestId(TestIds.NextItem)).toBeNull();
    expect(screen.queryByTestId(TestIds.PreviousItem)).toBeNull();
  });
});
