import React from "react";
import classes from './App.module.css';
const CreateAccount = () => {
    return(
        <div className={classes.create}>
            <h1>Create Account</h1>

            <hr></hr>
            <form>
                
                <input type="text" placeholder="First Name" required/>
                <br></br>
                 
                <input type="text" placeholder="Last Name" required/>
                <br></br>
               <div className={classes.age}>
               
                <input  type="number" placeholder="Age" required/>
                
               </div>
               <button className={classes.next}>Next</button>
            </form>
        </div>

    );
};

export default CreateAccount;