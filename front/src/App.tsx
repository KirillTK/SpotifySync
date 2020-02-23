import React from 'react';
import './App.css';
import { logIn } from './api/api';

const App = () => {
  const { search } = window.location;
  logIn(search)
    .then(response => console.error(response))
    .catch(console.error);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8080/auth/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
