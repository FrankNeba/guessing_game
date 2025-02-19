import React from "react";
import classes from './App.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import { baseUrl } from "./api/api";


const Login = (props) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const getEmail = (e) => {
    setEmail(e.target.value)
}


const getPassword = (e) => {
    setPassword(e.target.value)
}



const submit = async (e) => {
    e.preventDefault()
    const url = `${baseUrl}/api/login/`

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()
        console.log(data)
        console.log('yoo')
        if(response.ok){
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)
        navigate('/game')
        }
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
   
}

 const submited = async (e) => {
    e.preventDefault();
    navigate("/game")
 } 

    return(

        
        <div className={classes.create} style = {{display: props.startgame? "none":"block" }}>
           <div ><h1>Create Account</h1></div>   
           

            <hr></hr>
            <form  onSubmit={submit}>
                
                
               <div className={classes.age}>
               
                 <div>
                     <p>Enter Username:</p>
                 </div>
               
                
               

                 <input 
                type="email" 
                placeholder="Email" 
                required
                onChange={getEmail}
                />
                <br></br>

                 <input 
                type="password" 
                placeholder="Password" 
                required
                onChange={getPassword}
                />
                <br></br>

                
                
               </div>
                <button className={classes.next} onClick={props.startgamestate} type="submit"> Signup</button>
                <div className={classes.new}>
                    <p>No account?</p> 
                    <Link to='/signup'>Signup</Link>
                </div>
              
            </form>
            
        </div>

    );
};

export default Login;