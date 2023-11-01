import { Circle } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Flex } from '@components/containers';
import { ProperiesValue, getProperyContent } from '@components/layouts';
import { sizes } from '@root/theme';
import { MarkerProperties } from '@store/domains/Suggestions/types';

interface ConfirmationDialogProps {
  property: MarkerProperties;
  content: ProperiesValue;
}

export const ConfirmationDialogContent = observer(
  ({ property, content }: ConfirmationDialogProps) => {
    return (
      <Flex sx={{ alignItems: 'center' }}>
        <ListItemIcon sx={{ minWidth: 0, mr: sizes[16].rem }}>
          <Circle sx={{ fontSize: sizes[8].rem }} />
        </ListItemIcon>
        {getProperyContent(property, content)}
      </Flex>
    );
  }
);
