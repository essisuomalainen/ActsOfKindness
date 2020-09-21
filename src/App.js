import React from 'react';
import { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Act from './components/Act/Act';
import Quote from './components/Quotes/Quote';
import { BrowserRouter } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

export let actName;

function App() {

  // Onclick functionality when the user selects a option
  const [showCarousel, setShowCarousel] = useState(false);

	const clickHandler = (name) => {
    actName = name.toString().toLowerCase();
		setShowCarousel(!showCarousel);
  };
  
  
  return (
    <BrowserRouter>
    <div className={style.app}>
      <div className={style.header}>
      <Header />
      </div>

      <div className={style.actionsWrapper}>
     <div className={style.environment} onClick={() => clickHandler('Environment')} ><Act name="Environment" />
   </div> 
     <div className={style.others} onClick={() => clickHandler('Others')}><Act name="Others" /></div> 
     <div className={style.myself} onClick={() => clickHandler('Myself')}><Act name="Myself" /></div> 
      </div>
      <div className={style.quote}>{showCarousel ? <Quote clickHandler={clickHandler}/> : null}</div>
    </div>
    </BrowserRouter>
  );
}

export default LoadingScreen(App);
