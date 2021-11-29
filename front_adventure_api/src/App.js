import React from 'react';
import logo from './logo.svg';
import RoomList from './rooms/roomslist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create Adventures using Python API
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RoomList/>
      </header>
    </div>
  );
}

export default App;
