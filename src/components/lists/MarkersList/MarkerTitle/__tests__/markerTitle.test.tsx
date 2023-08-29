import { List } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MarkerTitle } from '../MarkerTitle';
import { MARKER_ID } from './test-data';

describe('MarkerTitle logic', () => {
  it('calls callback with correct arguments on element click ', async () => {
    const expandSuggestionsMock = jest.fn();

    render(
      <List>
        <MarkerTitle
          markerId={MARKER_ID}
          isSuggestionOpen={false}
          expandSuggestions={expandSuggestionsMock}
        />
      </List>
    );

    await userEvent.click(screen.getByText(MARKER_ID));

    expect(expandSuggestionsMock).toHaveBeenCalledTimes(1);
    expect(expandSuggestionsMock).toHaveBeenCalledWith(MARKER_ID);
  });
});
