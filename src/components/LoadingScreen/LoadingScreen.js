import React from 'react';
import style from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={style.LoadingScreenWrapper}>
            <img
            className={style.logo}
            id="logo"
            src={require("../../assets/LOGO.svg")}
            alt="logo"
      />
            <h2 className={style.text}>ACTS OF KINDNESS</h2>

        </div>
    )
}
export default LoadingScreen;