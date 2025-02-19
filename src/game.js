import React, { useState } from "react";
import classes from './App.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { baseUrl } from "./api/api";
// import classes from './test.module.css'
const Game = (props) => {

    

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [score, setScore] = useState(0)
    const [high, setHigh] = useState(0)

useEffect( () => {
   

    

    fetchData(0)


}, [])

const fetchData = async (score) => {
     const url = `${baseUrl}/api/play/`
    const access = localStorage.getItem('access')
    if(!access){
        navigate('/login')
    }

    try{
    const response = await fetch(url, {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`
        },
        body: JSON.stringify({
            'score': score
        })
    })
    const data = await response.json()
    console.log(data)
    setUsername(data.username)
    setScore(data.score)
    setHigh(data.highestScore)
    }
    catch(error){
        console.log(error)

    }}


const [number, setNumber] = useState(0)
const [balance, setBalance] = useState(high)
const [result, setResult] = useState('')

    
const clicked = (pos) =>{
    let number = Math.floor(Math.random()*6 + 1)
    setNumber(number)
    
    let score
    console.log(number)
    if(pos === 1 && number < 4){
        setBalance(balance + 5)
        setResult('win')
       
        score = balance + 5
    } 
    else if(pos === 2 && number === 4){
        setBalance(balance + 5)
        setResult('win')
       
        score = balance + 5
    }
    else if(pos === 3 && number > 4){
        setBalance(balance + 5)
        setResult('win')
       
        score = balance + 5
    }
    else {
        setBalance(balance - 5)
        setResult('fail')
    score = balance - 5
  }

  fetchData(score)
}
    
   
    return (
        <div className={classes.create} > 
            <div className= {classes.details}>
                <div><p className={classes.account}>User <p className={classes.blue}>{username}</p> </p></div>
               <div><p  className={classes.balance}>score <p className={classes.blue}>{score}</p></p></div> 
                 <div className={classes.highestScore}><p className={classes.score}>Highest score <p className={classes.blue}>{high}</p> </p></div> 
                    
                </div >
            
           
            
           
                <hr></hr>
                <div className={classes.refresh}>
                    <div className= {classes.start}><button onClick={props.startgamestate}><Link to="/" className={classes.button}>exit </Link></button></div>
                <div className= {classes.start}><button  onClick={props.start}>{props.show ? "stop" : "start"}</button></div>

                </div>
                
            <div style={{display:props.show? "block" : "none"}} className={classes.gameboard}>
            <div className={classes.board}> 
                <p>{score != null ?  score: null}</p>
                <p style = {{color: result === "fail"? "red": "green", fontWeight: "bolder"}}>{result}</p> 
            </div>

            <div className={classes.botton}>
                <button className={classes.play} onClick={() => clicked(1)}>{"< 4"}</button>
                <button className={classes.play} onClick={() => clicked(2)}>{"= 4"}</button>
                <button className={classes.play} onClick={() => clicked(3)}>{"> 4"}</button>
            </div>
            </div>

        </div>

    );

}



export default Game;