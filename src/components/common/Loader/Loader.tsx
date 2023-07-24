import { CircularProgress } from '@mui/material';
import { Flex } from '@components/containers';

export const Loader = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <CircularProgress />
    </Flex>
  );
};
