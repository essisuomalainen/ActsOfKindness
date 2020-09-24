import React, { useState, useEffect } from 'react';
import style from './Timer.module.css';



const Timer = () => {
  const [endTime, setEndTime ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0); 
 
  // Getting a end time by adding 4 hours in now time
const timerHandler = () =>{
  const end = new Date();
  end.setHours(new Date().getHours() + 4)
  setEndTime(end.getTime()); 
}

  useEffect(() => {
    timerHandler();
    let interval;
    interval = setInterval(() => {
      let timeLeft = (endTime - new Date().getTime()) 
      setTimeLeft(timeLeft);
    },10)
    return () => clearInterval(interval);
  }, [endTime, setTimeLeft])

  const hours = new Date(timeLeft).getHours() - 1;
  const min = new Date(timeLeft).getMinutes();
  const sec = new Date(timeLeft).getSeconds();

  return (
    <div className={style.timerWrapper}>
      <p className={style.timerText}>Try to finish in four hours!</p>
      <div className={style.timerStyle}>
        {hours + ':' + min + ':' + sec} 
      </div>
    </div>
  );
};

export default Timer;