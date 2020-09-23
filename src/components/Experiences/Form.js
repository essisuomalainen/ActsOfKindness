import React from 'react';
import style from './Form.module.css';

const Form = () => {
    return (
        <div className={style.formWrapper}>
        <div className={style.task1}>
						<input type='text' className={style.formInput}></input>
					</div>
                    <div className={style.task2}>
						<input type='text' className={style.formInput}></input>
					</div>
                    <div className={style.task3}>
						<input type='text' className={style.formInput}></input>
					</div>

        </div>
    )
}

export default Form;