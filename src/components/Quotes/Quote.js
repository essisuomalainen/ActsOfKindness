import React from 'react'
import style from './Quote.module.css';
import QuoteGenerator from '../QuoteGenerator/QuoteGenerator';




const Quote = ( { clickHandler } ) => {
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
            <div className={style.quoteWrapper}>
                <QuoteGenerator />
            </div>
        </div>
    );
    }

export default Quote;