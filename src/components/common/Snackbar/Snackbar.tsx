import { Alert, Snackbar as MUISnackbar, Slide } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@store/Context';

export const Snackbar = observer(() => {
  const { notification } = useStore();
  const { currentNotification } = notification;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    notification.clearNotification();
  };

  return (
    currentNotification && (
      <MUISnackbar
        open={!!currentNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
        onClose={handleClose}
        key={currentNotification.message}
      >
        <Alert
          onClose={handleClose}
          severity={currentNotification.type}
          sx={{ width: '100%' }}
        >
          {currentNotification.message}. {currentNotification.details}
        </Alert>
      </MUISnackbar>
    )
  );
});
