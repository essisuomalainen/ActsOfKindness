import React, { useState, useRef, useEffect } from 'react';
import style from './Timer.module.css';


const Timer = () => {
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  

  //const [add24Hours, setAdd24Hours] = useState();
 let interval = useRef();

    const startTimer = () => {
  //useEffect( () => {
    //add24Hours = new Date().setHours(new Date().getHours() + 24);
        const countDownDate = new Date('September 19, 2020 00:00:00').getTime();
      //let interval;
      //const startTime = '24:00:00';
      interval = setInterval(() => {
          const now  = new Date().getTime();
          const distance = countDownDate - now;
          //const distance = add24Hours.getHours() - now.getHours();
          //add24Hours.setHours(add24Hours.getHours() - now.getHours());
          //add24Hours.setMinutes(add24Hours.getMinutes() - now.getMinutes());
          //add24Hours.setSeconds(add24Hours.getSeconds() - now.getSeconds());
          //console.log('add24Hours', add24Hours);
         // const countDownDate = new Date().setTime(startTime);

          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);


          //console.log("hours", hours)

          if (distance < 0) {
              // stop the timer
            clearInterval(interval);
          }  else {
              // update the timer
              setTimerHours(hours);
              setTimerMinutes(minutes);
              setTimerSeconds(seconds);
          } 
          
      }, 1000)
    };

  // componentDidMount 
 useEffect(() => {
startTimer();
   return () => {
        clearInterval(interval.current);
     }
  });
  
  return (
    <div className={style.timerWrapper}>
      <div className={style.timer}>
       {timerHours} :{timerMinutes} :{timerSeconds}
      </div>

    </div>
  );
};

export default Timer;