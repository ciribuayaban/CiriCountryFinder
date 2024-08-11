import React from 'react';
import './App.css';
import Typeahead from './typeahead';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-text">CIRI</div>
        <img src={`${process.env.PUBLIC_URL}/plane.gif`} alt="Plane" className="App-gif" />
        <Typeahead />
      </header>
    </div>
  );
}

export default App;