import React from "react";
import classes from './App.module.css';
const CreateAccount = (props) => {
    return(
        <div className={classes.create} style = {{display: props.startgame? "none":"block" }}>
           <div ><h1>Create Account</h1></div>   
           

            <hr></hr>
            <form>
                
                <input type="text" placeholder="First Name" required/>
                <br></br>
                 
                <input type="text" placeholder="Last Name" required/>
                <br></br>
               <div className={classes.age}>
               
                <input  type="number" placeholder="Age" required/>
                
               </div>
               
            </form>
            <button className={classes.next} onClick={props.startgamestate}> Next</button>
        </div>

    );
};

export default CreateAccount;