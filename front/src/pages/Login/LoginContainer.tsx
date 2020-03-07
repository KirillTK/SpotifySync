import React from 'react';
import { Button, Container } from '@material-ui/core';

const loginHref = 'http://localhost:8080/auth/login';

export const LoginContainer: React.FC = () => {
  return (
    <Container className="app-container flex align-center">
      <Button variant="contained" color="primary" href={loginHref} size="large">
        Log In
      </Button>
    </Container>
  );
};
