import classes from './App.module.css'
import Game from './game';
import './App.css';
import React, { Component }from 'react';
import CreateAccount from './createAccount';
class App extends Component  {
  state = {
      startgame: false,
      show: false,
        balance : 1000,
     number : null,
     result: null,
  }
  start = (con, prev) => {
    this.setState({ 
      show: !this.state.show,
      number: null,
    })
}

clicked = (pos) =>{
    let number = Math.floor(Math.random()*6 + 1)
    this.setState({number : number}) 
    
    
    console.log(number)
    if(pos === 1 && number < 4){
        this.setState({balance: this.state.balance + 1000, result: "win"})
    } 
    else if(pos === 2 && number === 4){
        this.setState({balance: this.state.balance + 1000, result: "win"})
    }
    else if(pos === 3 && number > 4){
        this.setState({balance: this.state.balance + 1000, result: "win"})
    }
    else {this.setState({balance: this.state.balance - 1000, result: "fail"})}

}

  next =  () => {
    this.setState({startgame: !this.state.startgame})
   console.log(this.state.startgame)
  }
  render(){
  return (
    <div className="App">
      <div className={classes.navigation}>
      <header >
        <nav >GUESSING</nav>
        
      </header></div>
      <div>
        <CreateAccount startgamestate = {this.next} startgame = {this.state.startgame}/>
      </div>

      <div>
      <Game startgame = {this.state.startgame} result = {this.state.result} startgamestate = {this.next} balance = {this.state.balance} show= {this.state.show} start = {this.start} number = {this.state.number} clicked = {this.clicked}/>
      </div>

      <br></br>

    </div>
  );
  }
}

export default App;
