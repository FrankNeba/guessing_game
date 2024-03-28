import React, { Component} from "react";
import classes from './App.module.css'

class Game extends Component {
     state = {
        show: false,
        balance : 1000,
     number : null,
    }
    start = (con, prev) => {
        this.setState({ show: !this.state.show})
    }
    
    clicked = (pos) =>{

           this.setState({number : Math.floor(Math.random()*6 + 1)}) 
        
        if(pos === 1 && this.state.number < 4){
            this.setState({balance: this.state.balance + 1000})
        } 
        else if(pos === 2 && this.state.number === 4){
            this.setState({balance: this.state.balance + 1000})
        }
        else if(pos === 3 && this.state.number > 4){
            this.setState({balance: this.state.balance + 1000})
        }
        else {this.setState({balance: this.state.balance - 1000})}

    }
    render(){
    return (
        <div className={classes.create}>
            <div className={classes.head}>
            <div className={classes.account}>
                <p>Account: demo</p>
            </div>

            <div className={classes.balance}>
                <p>Balance: {this.state.balance}</p>
                </div >
            
            </div>
            
           
                <hr></hr>
                <div className= {classes.start}><button onClick={this.start}>{this.state.show ? "stop" : "start"}</button></div>

            <div style={{display:this.state.show? "block" : "none"}}>
            <div className={classes.board}> 
            <p>{this.state.number}</p> 
            </div>

            <div >
            <button className={classes.play} onClick={() => this.clicked(1)}>{"< 4"}</button>
            <button className={classes.play} onClick={() => this.clicked(2)}>{"= 4"}</button>
            <button className={classes.play} onClick={() => this.clicked(3)}>{"> 4"}</button>
            </div>
            </div>

        </div>

    );
}
}

export default Game;