import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Others from './components/Others/Others';
import Yourself from './components/Yourself/Yourself';
import Environment from './components/Environment/Environment';

export default function App() {
  return (
    <div className={style.App}>
      <LoadingScreen />
      
    </div>
  );
};
