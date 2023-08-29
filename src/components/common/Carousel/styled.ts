import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sizes } from '@root/theme';

export const ScrollContainer = styled(Box)`
  display: flex;
  gap: ${sizes[8].rem};
  overflow-x: scroll;
  padding: ${sizes[8].rem};

  touch-action: none;
  -ms-touch-action: none;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
