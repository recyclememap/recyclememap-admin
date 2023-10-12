import { useAuth0 } from '@auth0/auth0-react';
import { observer } from 'mobx-react-lite';
import { ReactNode, useEffect, useState } from 'react';
import { Loader } from '@components/common';
import { useStore } from '@root/store';

type WithAuthProps = { children: ReactNode };

export const WithAuth = observer(({ children }: WithAuthProps) => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const { auth } = useStore();
  const [isJWTLoaded, setIsJwtLoaded] = useState(false);

  useEffect(() => {
    const setAuth = async () => {
      const JWT = await getAccessTokenSilently();
      auth.setAuth(JWT);

      setIsJwtLoaded(true);
    };

    setAuth();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isJWTLoaded && !auth.isAuthorized) {
      loginWithRedirect();
    }
  }, [isJWTLoaded, auth.isAuthorized, loginWithRedirect]);

  return isJWTLoaded ? children : <Loader />;
});
