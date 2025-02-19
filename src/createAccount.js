import React from "react";
import classes from './App.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import { baseUrl } from "./api/api";


const CreateAccount = (props) => {

const [email, setEmail] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [loading, setLoading] = useState(false)

const navigate = useNavigate()

const getEmail = (e) => {
    setEmail(e.target.value)
}

const getUSername = (e) =>{
    setUsername(e.target.value)
}

const getPassword = (e) => {
    setPassword(e.target.value)
}

const getConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
}


const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const url = `${baseUrl}/api/signup/`
    if(password === confirmPassword){
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                username:username,
                email: email,
                password: password,
                password2: confirmPassword
            })
        })

        const data = await response.json()
        // console.log('Login success, ' ,data)
        setLoading(false)

        if(response.ok){
            navigate('/login')
        }
        if(data.email){
            alert(data.email)
        }

        if(data.username){
            alert(data.username)
        }
    }
    catch(error){
        console.log(error.response.data.email[0])
        setLoading(false)
    }}
    else{
    alert('Passwords Don\'t match ' )
    setLoading(false)
    }
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
                type="text" 
                placeholder="User Name" 
                required
                onChange={getUSername}
                />
                <br></br>

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

                 <input 
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={getConfirmPassword}
                />
                <br></br>
                
               </div>
                <button className={classes.next} onClick={props.startgamestate} type="submit"> {!loading? 'Signup': 'loading'}</button>
                <div className={classes.new}>
                    <p>Already have an account?</p> 
                    <Link to='/login'>Login</Link>
                </div>
              
            </form>
            
        </div>

    );
};

export default CreateAccount;