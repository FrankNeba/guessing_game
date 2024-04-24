import React from "react";
import classes from './App.module.css'
import { Link } from "react-router-dom";
// import classes from './test.module.css'
const Game = (props) => {
    
    
   
    return (
        <div className={classes.create} > 
            <div className= {classes.details}>
                <div><p className={classes.account}>User: {props.name} </p></div>
               <div><p  className={classes.balance}>score: {props.balance}</p></div> 
                 <div className={classes.highestScore}><p className={classes.score}>Highest score: {props.highestScore} </p></div> 
                    
                </div >
            
           
            
           
                <hr></hr>
                <div className={classes.refresh}>
                    <div className= {classes.start}><button onClick={props.startgamestate}><Link to="/" className={classes.button}>exit </Link></button></div>
                <div className= {classes.start}><button  onClick={props.start}>{props.show ? "stop" : "start"}</button></div>

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