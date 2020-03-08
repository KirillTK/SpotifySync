import React, { useEffect } from 'react';
import { useUser } from 'hooks/use-user';
import { RouteProps, useHistory } from 'react-router-dom';
import { Route as RouteUI } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/router-path';

export const Route: React.FC<RouteProps> = ({
  path,
  component
}: RouteProps) => {
  const user = useUser();
  const { push } = useHistory();

  useEffect(() => {
    const redirectPath = user ? PRIVATE_ROUTES.profile : PUBLIC_ROUTES.login;
    push(redirectPath);
  }, [user]);

  return <RouteUI path={path} component={component} />;
};
