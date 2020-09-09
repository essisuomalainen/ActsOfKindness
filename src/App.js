import React from 'react';
import { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Act from './components/Act/Act';
import Quote from './components/Quotes/Quote';



function App() {

  // Onclick functionality when the user selects a option
  const [showCarousel, setShowCarousel] = useState(false);

	const clickHandler = () => {
		setShowCarousel(!showCarousel);
  };
  
  return (
    
    <div className={style.app}>
      <div className={style.header}>
      <Header />
      </div>

      <div className={style.actionsWrapper}>
     <div onClick={() => clickHandler()} ><Act name="Environment" /></div> 
     <div onClick={() => clickHandler()}><Act name="Others" /></div> 
     <div onClick={() => clickHandler()}><Act name="Myself" /></div> 
      </div>
      <div className={style.quote}>{showCarousel ? <Quote /> : null}</div>
    </div>
  );
}

export default App;
