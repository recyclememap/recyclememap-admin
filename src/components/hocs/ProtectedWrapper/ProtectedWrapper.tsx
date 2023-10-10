import { withAuthenticationRequired } from '@auth0/auth0-react';
import { ReactNode } from 'react';
import { Loader } from '@components/common';
import { WithAuth } from '@components/hocs/WithAuth/WithAuth';

type ProtectedWrapperProps = { children: ReactNode };

export const ProtectedWrapper = ({ children }: ProtectedWrapperProps) => {
  const WithAutnecation = withAuthenticationRequired(
    () => <WithAuth>{children}</WithAuth>,
    {
      onRedirecting: () => <Loader />
    }
  );

  return <WithAutnecation />;
};
