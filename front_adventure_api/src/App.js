import React from 'react';
import logo from './logo.svg';
import RoomList from './rooms/roomslist';
import RoomForm from './rooms/roomform';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create Adventures using Python API
        </p>
        <div>
          <RoomForm/>
        </div>
        <RoomList/>
      </header>
    </div>
  );
}

export default App;
