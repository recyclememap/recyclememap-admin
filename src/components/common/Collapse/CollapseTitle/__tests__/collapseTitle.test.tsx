import { List } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CollapseTitle } from '../CollapseTitle';
import { TextElements } from './test-data';

describe('CollapseTitle logic', () => {
  it('calls callback on element click ', async () => {
    const onCollapseChange = jest.fn();

    render(
      <List>
        <CollapseTitle
          isHeader={true}
          title={TextElements.Title}
          onCollapseChange={onCollapseChange}
          isOpen={false}
        />
      </List>
    );

    await userEvent.click(screen.getByText(TextElements.Title));

    expect(onCollapseChange).toHaveBeenCalledTimes(1);
  });
});
