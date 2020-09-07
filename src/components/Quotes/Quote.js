import React from 'react'
import style from './Quote.module.css';

const Quote = () => {
    return (
        <div className={style.quoteBackground}>
            <img
            className={style.arrowBack}
            id="back"
            src={require("../../assets/back.svg")}
            alt="back"
      />
            <div className={style.timer}>24:01:59</div>
        <div className={style.quoteWrapper}>
            <h2 className={style.quoteHeader}>OTHERS</h2>
            <p className={style.quoteText}>Make today a day free of judgment - in words, thoughts and actions. The way we judge others is often the way the world will judge us. Don't let your fears or insecurities get in the way of truly getting to know someone. </p>
        </div>
        </div>
    )
}

export default Quote;