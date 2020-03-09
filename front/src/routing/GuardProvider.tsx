import React, { useEffect } from 'react';
import { useUser } from 'hooks/use-user';
import { useHistory } from 'react-router-dom';
import { PUBLIC_ROUTES } from 'constants/router-path';

interface GuardProvider {
  children: React.ReactElement;
}

export const GuardProvider: React.FC<GuardProvider> = ({
  children
}: GuardProvider) => {
  const user = useUser();
  const { push } = useHistory();

  useEffect(() => {
    if (!user) {
      push(PUBLIC_ROUTES.login);
    }
  }, [user]);

  return user ? children : null;
};
