import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@root/store';
import { sizes } from '@root/theme';
import { NotificationType } from '@store/domains/Notification/types';

const LogoutLoaderName = 'logout-button-loading';

export const LogoutButton = observer(() => {
  const { loader, notification } = useStore();
  const { logout } = useAuth0();

  const onLogout = async () => {
    loader.setLoader(LogoutLoaderName);

    try {
      await logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    } catch (e) {
      notification.setCurrentNotification({
        type: NotificationType.Error,
        message: 'Error',
        details: 'Failed to log out'
      });

      loader.deleteLoader(LogoutLoaderName);
    }
  };

  return (
    <Button
      onClick={onLogout}
      variant="contained"
      disabled={loader.isLoading(LogoutLoaderName)}
      sx={{
        position: 'absolute',
        top: sizes[16].rem,
        right: sizes[16].rem,
        zIndex: 1000
      }}
    >
      Log Out
    </Button>
  );
});
