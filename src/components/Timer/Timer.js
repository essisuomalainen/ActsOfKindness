import React, { useState, useEffect } from 'react';
import style from './Timer.module.css';





const Timer = ({endTime, setEndTime, timeLeft, setTimeLeft}) => {
  //const [endTime, setEndTime ] = useState(new Date() + 1);
  //const [timeLeft, setTimeLeft] = useState(); 

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      let timeLeft = (endTime - new Date().getTime()) 
      setTimeLeft(timeLeft);
    },10)
    return () => clearInterval(interval);
  }, [endTime, setTimeLeft])
  //console.log('endTime', endTime, 'timeleft', timeLeft);

  const hours = new Date(timeLeft).getHours() - 1;
  const min = new Date(timeLeft).getMinutes();
  const sec = new Date(timeLeft).getSeconds();

  console.log('hours', hours, 'min', min, 'sec', sec);


  return (
    <div className={style.timerWrapper}>
      <div className={style.timerStyle}>
        {hours + ':' + min + ':' + sec} 
      </div>

    </div>
  );
};

export default Timer;