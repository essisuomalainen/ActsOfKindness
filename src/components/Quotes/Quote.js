import React from 'react'
import style from './Quote.module.css';
import Timer from '../Timer/Timer.js';
import quotes from '../../quotes.js';
import { actName } from '../../App';



const Quote = ( {clickHandler, endTime, setEndTime, timeLeft, setTimeLeft} ) => {


//for (const [key, value ] of Object.entries(quotes));
//console.log(quotes);

const values = Object.values(quotes);

// console.log(values);

let randomNumber;
let actValues = [];

actValues = [...quoteGenerator()];

function quoteGenerator() {
    let pushedValues = [];
    for (const value of values) {
        if (value.category === actName) {
            pushedValues.push(value);
        }
    }
    randomNumber = Math.floor((Math.random() * pushedValues.length) + 0);
    return pushedValues;
}






    return (
        <div className={style.quoteBackground} >
            <button className={style.buttonBack} onClick={clickHandler}>
                <img
                    className={style.arrowBack}
                    id="back"
                    src={require("../../assets/arrowwhite.svg")}
                    alt="back"
                />
            </button>
     
            <div className={style.timer}>
                <p className={style.timerText}>Can you do it before the time runs out?</p>
                <Timer endTime={endTime} setEndTime={setEndTime} timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
            </div>

            <div className={style.quoteWrapper}>
                <h2 className={style.quoteHeader}>{actValues[randomNumber].category}</h2>
                <p className={style.quoteText}>{actValues[randomNumber].quote}</p>
            </div>
        </div>
    );
    }

export default Quote;