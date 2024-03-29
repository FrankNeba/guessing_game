import React from "react";
import classes from './App.module.css'

const Game = (props) => {
    
    
   
    return (
        <div className={classes.create} style = {{display: props.startgame? "block" : "none"}}> 
            <div className={classes.head}>
            <div >
                <p className={classes.account}>Account: demo</p>
                <p  className={classes.balance}>Balance: {props.balance}</p>
                </div >
            
            </div>
            
           
                <hr></hr>
                <div className= {classes.start}><button onClick={props.startgamestate}>exit</button></div>
                <div className= {classes.start}><button onClick={props.start}>{props.show ? "stop" : "start"}</button></div>

            <div style={{display:props.show? "block" : "none"}}>
            <div className={classes.board}> 
                <p>{props.number != null ? "Number: " + props.number: null}</p> 
            </div>

            <div className={classes.botton}>
                <button className={classes.play} onClick={() => props.clicked(1)}>{"< 4"}</button>
                <button className={classes.play} onClick={() => props.clicked(2)}>{"= 4"}</button>
                <button className={classes.play} onClick={() => props.clicked(3)}>{"> 4"}</button>
            </div>
            </div>

        </div>

    );

}

export default Game;