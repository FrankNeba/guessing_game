import React, { useState, useEffect, useCallback } from "react";
import classes from './App.module.css';
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "./api/api";

const Game = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('User');
    const [score, setScore] = useState(0);
    const [high, setHigh] = useState(0);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    // const [balance, setBalance] = useState(0);
    const [result, setResult] = useState('');

    const fetchData = useCallback(async (scor) => {
        const url = `${baseUrl}/api/play/`;
        const access = localStorage.getItem('access');

        if (!access) {
            navigate('/login');
            return;
        }

        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access}`
                },
                body: JSON.stringify({ 'score': scor })
            });
            const data = await response.json();
            console.log(data);

            setUsername(data.username);
            setScore(data.score);
            setHigh(data.highestScore);
            // setBalance(data.highestScore); // Initialize balance with highest score
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchData(0);
    }, [fetchData]); // Added fetchData as a dependency

    const clicked = (pos) => {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        setNumber(randomNumber);

        let newBalance = score;
        let newResult = '';

        if ((pos === 1 && randomNumber < 4) || (pos === 2 && randomNumber === 4) || (pos === 3 && randomNumber > 4)) {
            newBalance += 5;
            newResult = 'win';
        } else {
            newBalance -= 5;
            newResult = 'fail';
        }

        // setBalance(newBalance);
        setResult(newResult);

        fetchData(newBalance);
    };

    return (
        <div className={classes.create}>
            <div className={classes.details}>
                <div><p className={classes.account}>User <span className={classes.blue}>{username}</span></p></div>
                <div><p className={classes.balance}>Score <span className={classes.blue}>{score}</span></p></div>
                <div className={classes.highestScore}><p className={classes.score}>Highest score <span className={classes.blue}>{high}</span></p></div>
            </div>

            <hr />
            <div className={classes.refresh}>
                <div className={classes.start}>
                    <button onClick={props.startgamestate}><Link to="/" className={classes.button}>Exit</Link></button>
                </div>
                <div className={classes.start}>
                    <button onClick={props.start}>{props.show ? "Stop" : "Start"}</button>
                </div>
            </div>

            <div style={{ display: props.show ? "block" : "none" }} className={classes.gameboard}>
                <div className={classes.board}>
                    <p>{number}</p>
                    <p style={{ color: result === "fail" ? "red" : "green", fontWeight: "bolder" }}>{result}</p>
                </div>

                <div className={classes.botton}>
                    <button className={classes.play} onClick={() => clicked(1)}>{loading ? 'Loading' : "< 4"}</button>
                    <button className={classes.play} onClick={() => clicked(2)}>{loading ? 'Loading' : "= 4"}</button>
                    <button className={classes.play} onClick={() => clicked(3)}>{loading ? 'Loading' : "> 4"}</button>
                </div>
            </div>
        </div>
    );
};

export default Game;
