import React from 'react'
import style from './Quote.module.css';
import Timer from '../Timer/Timer.js';
import { useEffect, useState } from 'react';
import quotes from '../../quotes.js';
import {actName} from '../../App';
import { act } from 'react-dom/test-utils';
import { Route } from 'react-router-dom';
import App from '../../App';


const Quote = ( {clickHandler} ) => {


//for (const [key, value ] of Object.entries(quotes));
//console.log(quotes);

const values = Object.values(quotes);

console.log(values);

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





/* useEffect(() => {
    quoteData.then((data) => {
        let quoteArrays = [];
        for (let item of data.quotes) {
            quoteArrays.push(item.category);
        }
        
        setArray(quoteArrays);
        console.log(data);
    });
}, []); */
// {clickedQuote = environment : environment ? others ? myself}

/* 
const setArray = (array) => {
    const passArray = new Set(array); */
    return (
        <div className={style.quoteBackground} >
            <button className={style.buttonBack} onClick={clickHandler}><img
            className={style.arrowBack}
            id="back"
            src={require("../../assets/back.svg")}
            alt="back"
      />
      
      </button>
            <div className={style.timer}><p className={style.timerText}>time!</p><Timer /></div>
        <div className={style.quoteWrapper}>
            <h2 className={style.quoteHeader}>{actValues[randomNumber].category}</h2>
    <p className={style.quoteText}>{actValues[randomNumber].quote}</p>
        </div>
        </div>
    );
    }

export default Quote;