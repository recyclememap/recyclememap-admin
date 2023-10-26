import { List } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { noop } from '@utils/helpers';
import { CollapseTitle } from '../CollapseTitle';
import { TextElements, TestIds } from './test-data';

describe('CollapseTitle visual', () => {
  it('shows correct icon if suggestion is close', () => {
    render(
      <List>
        <CollapseTitle
          isHeader={true}
          title={TextElements.Title}
          onCollapseChange={noop}
          isOpen={false}
        />
      </List>
    );

    screen.getByTestId(TestIds.ExpandMoreIcon);
  });

  it('shows correct icon if suggestion is open', () => {
    render(
      <List>
        <CollapseTitle
          isHeader={true}
          title={TextElements.Title}
          onCollapseChange={noop}
          isOpen={true}
        />
      </List>
    );

    screen.getByTestId(TestIds.ExpandLessIcon);
  });
});
