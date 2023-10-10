import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { observer } from 'mobx-react-lite';
import { LogoutButton } from '@components/common';
import { Map, Sidebar } from '@components/layouts';

const SuggestionsPage = observer(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container sx={{ height: '100%', overflow: 'hidden' }}>
        <Grid
          xs={isMobile ? 12 : 4}
          sx={{
            order: isMobile ? 2 : 1,
            height: isMobile ? '50%' : '100%',
            borderRight: '1px solid',
            borderColor: `${theme.palette.grey[100]}`
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          xs={isMobile ? 12 : 8}
          sx={{
            order: isMobile ? 1 : 2,
            height: isMobile ? '50%' : 'auto'
          }}
        >
          <Map />
        </Grid>
      </Grid>
      <LogoutButton />
    </>
  );
});

export default SuggestionsPage;
