import React from 'react';
import './styles/App.css';
import Nav from './components/nav/Nav';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteSwitch />
    </div>
  );
}

export default App;
