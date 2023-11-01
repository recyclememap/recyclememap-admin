import { List } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Collapse } from '../Collapse';
import { TextElements, Children } from './test-data';

describe('CollapseTitle logic', () => {
  it('shows callback on element click ', async () => {
    render(
      <List>
        <Collapse title={TextElements.Title}>
          <Children />
        </Collapse>
      </List>
    );

    expect(screen.queryByText(TextElements.Children)).toBeNull();

    await userEvent.click(screen.getByText(TextElements.Title));

    screen.getByText(TextElements.Children);
  });
});
