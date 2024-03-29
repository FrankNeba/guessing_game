import React from "react";
import classes from './App.module.css';
const Welcome = (props) => {
    return(
        <div className={classes.create} style = {{display: props.startgame? "none":"block" }}>
           <div ><h1> Welcome to Guessing game.</h1></div>   
           

            <hr></hr>
           <h3>How to play</h3>
           
            <p>Predict if the next number to be generated will be less than, equal to or greater than 5.</p>
            <p> if your guess is correct   then your balance will be increased by 1000 else it will be reduced by 1000</p>
            <p>Click next below to begin</p>
            <p>Click start to start playing</p>
            <p>Click stop to stop and reset the game</p>
            <p>Click exit to exit the game</p>
            <button className={classes.next} onClick={props.startgamestate}> Next</button>
        </div>

    );
};

export default Welcome;