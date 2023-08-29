import { styled } from '@mui/material/styles';
import { Flex } from '@root/components/containers';
import { sizes } from '@root/theme';

export const StyledSidebar = styled(Flex)`
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: ${sizes[16].rem};
`;
