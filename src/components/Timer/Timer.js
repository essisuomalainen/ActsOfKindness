import React, { useState, useRef, useEffect } from 'react';
import style from './Timer.module.css';


const Timer = () => {
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  

  let interval = useRef();


  const startTimer = () => {
      const countDownDate = new Date('September 14 2020, 24:00:00').getTime();
      //const startTime = '24:00:00';
      interval = setInterval(() => {
          const now  = new Date().getTime();
          const distance = countDownDate - now;
          
          // const countDownDate = new Date().setTime(startTime);

          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor(((distance % (1000 * 60 * 60)) / (1000 * 60)));
          const seconds = Math.floor(((distance % (1000 * 60)) / 1000));

          if (distance < 0) {
              // stop the timer
            clearInterval(interval.current);
          }  else {
              // update the timer
              setTimerHours(hours);
              setTimerMinutes(minutes);
              setTimerSeconds(seconds);
          } 
      }, );
  }

  // componentDidMount 
  useEffect(() => {
      startTimer();
      return () => {
          clearInterval(interval.current);
      }
  })
  
  return (
    <div className={style.timerWrapper}>
      <div className={style.timer}>
       {timerHours} :{timerMinutes} :{timerSeconds}
      </div>

    </div>
  );
};

export default Timer;