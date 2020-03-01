import React from 'react';
import './App.css';
import {Button, Container, Grid, Paper, Typography} from '@material-ui/core';

const App = () => {
  const { search } = window.location;

  return (
    <Grid container>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <a
          className="App-link"
          href="http://localhost:8080/auth/login"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grid>
  );
};

export default App;
