import React from "react";
import classes from './App.module.css'
// import classes from './test.module.css'
const Game = (props) => {
    
    
   
    return (
        <div className={classes.create} style = {{display: props.startgame? "block" : "none"}}> 
            <div className= {classes.details}>
                <p className={classes.account}>Account: demo </p>
                <p  className={classes.balance}>Balance: {props.balance}</p>
                </div >
            
           
            
           
                <hr></hr>
                <div className={classes.refresh}>
                    <div className= {classes.start}><button onClick={props.startgamestate}>exit</button></div>
                <div className= {classes.start}><button onClick={props.start}>{props.show ? "stop" : "start"}</button></div>

                </div>
                
            <div style={{display:props.show? "block" : "none"}}>
            <div className={classes.board}> 
                <p>{props.number != null ?  props.number: null}</p>
                <p style = {{color: props.result === "fail"? "red": "green", fontWeight: "bolder"}}>{props.result}</p> 
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