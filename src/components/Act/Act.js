import React from 'react';
import style from './Act.module.css';

const Act = (props) => {
    return (
        <div className={style.actWrapper}>
        <p className={style.name}>{props.name}</p>

        </div>
    )
}

export default Act;