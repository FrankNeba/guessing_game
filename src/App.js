import classes from './App.module.css'
import Game from './game';
import './App.css';
import React from 'react';
import CreateAccount from './createAccount';
function App() {
  return (
    <div className="App">
      <header >
        <nav className= {classes.navigation}>GUESSING</nav>
        <hr></hr>
      </header>
      <div>
        <CreateAccount />
      </div>

      <div>
      <Game />
      </div>

      <br></br>

    </div>
  );
}

export default App;
