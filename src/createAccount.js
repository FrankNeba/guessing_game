import React from "react";
import classes from './App.module.css';
import { useNavigate } from "react-router-dom";


const CreateAccount = (props) => {
const navigate = useNavigate()
 const submited = (e) => {
    e.preventDefault();
    navigate("/game")
 } 

    return(

        
        <div className={classes.create} style = {{display: props.startgame? "none":"block" }}>
           <div ><h1>Create Account</h1></div>   
           

            <hr></hr>
            <form  onSubmit={submited}>
                
                {/* <input 
                type="text" 
                placeholder="First Name" 
                required
                onChange={(e) => props.getFname(e.target.value)}
                />
                <br></br> */}
                 
                {/* <input 
                type="text" 
                placeholder="Last Name"
                 required
                 onChange={(e) => props.getLname(e.target.value)}/> */}
                <br></br>
               <div className={classes.age}>
               
                {/* <input  
                type="number" 
                placeholder="Age"
                 required
                 onChange={(e) => props.getAge(e.target.value)}/> */}
                 <div>
                     <p>Enter Username:</p>
                 </div>
               
                
                <input 
                type="text" 
                placeholder="User Name" 
                required
                onChange={(e) => props.getUser(e.target.value)}
                />
                <br></br>
                
               </div>
                <button className={classes.next} onClick={props.startgamestate} type="submit"> Next</button>
              
            </form>
            
        </div>

    );
};

export default CreateAccount;