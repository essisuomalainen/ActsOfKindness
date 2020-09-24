import React from 'react';
import quotes from '../../quotes.js';
import { actName } from '../../App';
import style from './QuoteGenerator.module.css';



const values = Object.values(quotes);
let randomNumber;
let actValues = [];

const QuoteGenerator = () => {
 //spread operator       
actValues = [...quoteGenerator()];
function quoteGenerator() {
     
    let pushedValues = [];
    for (const value of values) {
        if (value.category === actName) {
            pushedValues.push(value);
        }
    }
    randomNumber = Math.floor((Math.random() * pushedValues.length) + 0);
    return  pushedValues;
    
}


return (
    <div className={style.quoteWrapper}>
        <h2 className={style.quoteHeader}>{actValues[randomNumber].category}</h2>
        <p className={style.quoteText}>{actValues[randomNumber].quote}</p>
    </div>
     

) }
export default QuoteGenerator;