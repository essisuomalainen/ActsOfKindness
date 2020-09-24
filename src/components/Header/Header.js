import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <h2 className={style.headerText}>Today I want to be kind to..</h2>
        </div>
    )
}

export default Header;