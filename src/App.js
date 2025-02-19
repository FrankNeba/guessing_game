import classes from './App.module.css'
import Game from './game';
import './App.css';
import React, { Component }from 'react';
import Welcome from './welcome';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './createAccount';
import Login from './Login';

class App extends Component  {
  state = {
      startgame: false,
      show: false,
      balance : 0,
      number : null,
      result: null,
      fname: "ngwa",
      lname: null,
      age: null,
      user: null,
      highestScore: 0,

  }

  // funtion that starts and stop game. works with the start button
  start = () => {
    const show = !this.state.show
    this.setState({ 
      show: show,
      number: null,
      result: null,
    })

    if(show){
      this.setState ({balance: 0})
    }
}

//funtion to collect the last name
getLname = (name) => {
  this.setState({
    lname: name,
  })

}


getUser = (name) => {
  this.setState({
    user: name,
  })

}
// funtion to collect the first name
getFname = (name) => {
  this.setState({
    fname: name,
  })
}

  // funtion to collect the age
getAge = (age) => {
  this.setState({
    age: age,
  })

}

// generates  random number and updates balance
clicked = (pos) =>{
    let number = Math.floor(Math.random()*6 + 1)
    this.setState({number : number}) 
    
    let score
    console.log(number)
    if(pos === 1 && number < 4){
        this.setState({balance: this.state.balance + 5, result: "win"})
        score = this.state.balance + 5
    } 
    else if(pos === 2 && number === 4){
        this.setState({balance: this.state.balance + 5, result: "win"})
        score = this.state.balance + 5
    }
    else if(pos === 3 && number > 4){
        this.setState({balance: this.state.balance + 5, result: "win"})
        score = this.state.balance + 5
    }
    else {this.setState({balance: this.state.balance - 5, result: "fail"})
    score = this.state.balance - 5
  }
    if(score > this.state.highestScore) {this.setState({highestScore: score})}
}


// starts and stops the game with the start and stop button
  next =  () => {
    this.setState({startgame: !this.state.startgame,
    show: false,
  balance: 0,
  highestScore: 0,})
   console.log(this.state.startgame)
   localStorage.removeItem('access')
  }
  render(){
  return (
    <div className="App">
      <div className={classes.navigation}>
      <header >
        <nav >GUESSING</nav>
        
      </header></div>
      <div>
        
      </div>

      <div>
      
      </div>
      <Routes>
        <Route path="/" element = {<Welcome startgamestate = {this.next} startgame = {this.state.startgame}/>} />
        <Route path="/game" element ={<Game highestScore = {this.state.highestScore} startgame = {this.state.startgame} result = {this.state.result} startgamestate = {this.next} balance = {this.state.balance} show= {this.state.show} start = {this.start} number = {this.state.number} clicked = {this.clicked} name = {this.state.user}/>} />
        <Route path = "/signup" element = {<CreateAccount getAge = {this.getAge} getFname = {this.getFname} getLname = {this.getLname} getUser = {this.getUser} startgamestate= {this.next} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    
        
     

      <br></br>

    </div>
  );
  }
}


export default App;
