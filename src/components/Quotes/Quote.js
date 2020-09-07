import React from 'react'
import style from './Quote.module.css';

const Quote = () => {
    return (
        <div className={style.quoteBackground}>
            <div className={style.timer}>24:01:59</div>
        <div className={style.quoteWrapper}>
            <h2 className={style.quoteHeader}>header</h2>
            <p className={style.quoteText}>quote of the day</p>
        </div>
        </div>
    )
}

export default Quote;