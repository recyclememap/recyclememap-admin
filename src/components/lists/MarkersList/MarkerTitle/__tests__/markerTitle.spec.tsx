import { List } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { noop } from '@utils/helpers';
import { MarkerTitle } from '../MarkerTitle';
import { MARKER_ID, TestIds } from './test-data';

describe('MarkerTitle visual', () => {
  it('shows correct icon if suggestion is close', () => {
    render(
      <List>
        <MarkerTitle
          markerId={MARKER_ID}
          isSuggestionOpen={false}
          expandSuggestions={noop}
        />
      </List>
    );

    screen.getByText(MARKER_ID);
    screen.getByTestId(TestIds.ExpandMoreIcon);
  });

  it('shows correct icon if suggestion is open', () => {
    render(
      <List>
        <MarkerTitle
          markerId={MARKER_ID}
          isSuggestionOpen={true}
          expandSuggestions={noop}
        />
      </List>
    );

    screen.getByTestId(TestIds.ExpandLessIcon);
  });
});
