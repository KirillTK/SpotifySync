import React, { useEffect } from 'react';
import { useUser } from 'hooks/use-user';
import { useHistory } from 'react-router-dom';
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from 'constants/router-path';

interface GuardProvider {
  children: React.ReactElement;
}

export const GuardProvider: React.FC<GuardProvider> = ({
  children
}: GuardProvider) => {
  const user = useUser();
  const { push } = useHistory();

  useEffect(() => {
    const redirectPath = user ? PRIVATE_ROUTES.search : PUBLIC_ROUTES.login;
    push(redirectPath);
  }, [user]);

  return <>{children}</>;
};
