import React from 'react'
import style from './Quote.module.css';
import Timer from '../Timer/Timer.js';
import API from '../API/API';
import { useEffect } from 'react';

const Quote = ({Clickhandler}) => {

const quoteData = API();

useEffect(() => {
    quoteData.then((data) => {
        let quoteArrays = [];
        for (let item of data.quotes) {
            quoteArrays.push(item.text);
        }
        
        setArray(quoteArrays);
        console.log(data);
    });
}, []);

const setArray = (array) => {
    const passArray = new Set(array);
};
    return (
        <div className={style.quoteBackground}>
            <img
            className={style.arrowBack}
            id="back"
            src={require("../../assets/back.svg")}
            alt="back"
            onClick={Clickhandler}
      />
            <div className={style.timer}><Timer /></div>
        <div className={style.quoteWrapper}>
            <h2 className={style.quoteHeader}>OTHERS</h2>
            <p className={style.quoteText}>Make today a day free of judgment - in words, thoughts and actions. The way we judge others is often the way the world will judge us. Don't let your fears or insecurities get in the way of truly getting to know someone. </p>
        </div>
        </div>
    )
}

export default Quote;