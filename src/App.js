import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Act from './components/Act/Act';

function App() {
  return (
    <div className={style.app}>
      <div className={style.header}>
      <Header />
      </div>
      <div className={style.actionsWrapper}>
      <Act name="Environment"/>
      <Act name="Others"/>
      <Act name="Myself" />
      </div>
    </div>
  );
}

export default App;
