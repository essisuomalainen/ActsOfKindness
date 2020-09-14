import React from 'react';
import { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Act from './components/Act/Act';
import Quote from './components/Quotes/Quote';

export let actName;

function App() {

  // Onclick functionality when the user selects a option
  const [showCarousel, setShowCarousel] = useState(false);

	const clickHandler = (name) => {
    actName = name.toLowerCase();
		setShowCarousel(!showCarousel);
  };
  
  return (
    
    <div className={style.app}>
      <div className={style.header}>
      <Header />
      </div>

      <div className={style.actionsWrapper}>
     <div onClick={() => clickHandler('Environment')} ><Act name="Environment" /></div> 
     <div onClick={() => clickHandler('Others')}><Act name="Others" /></div> 
     <div onClick={() => clickHandler('Myself')}><Act name="Myself" /></div> 
      </div>
      <div className={style.quote}>{showCarousel ? <Quote /> : null}</div>
    </div>
  );
}

export default App;
