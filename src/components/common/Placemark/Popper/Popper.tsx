import { Box, Typography } from '@mui/material';
import { Icon } from '@components/common';
import type { flatIconsKeys } from '@components/common';

type PopperProps = {
  icons: flatIconsKeys[];
  address: string;
};

export const Popper = ({ address, icons }: PopperProps) => {
  return (
    <>
      <Typography variant="h5" color="text.secondary">
        {address}
      </Typography>
      <Box sx={{ paddingTop: '16px', display: 'flex', gap: '10px' }}>
        {icons.map((name) => {
          return <Icon name={name} key={name} />;
        })}
      </Box>
    </>
  );
};
