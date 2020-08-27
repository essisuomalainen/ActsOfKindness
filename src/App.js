import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Others from './components/Others/Others';
import Yourself from './components/Yourself/Yourself';
import Environment from './components/Environment/Environment';

function App() {
  return (
    <div className="App">
      <Header />
      <Others />
      <Environment />
      <Yourself />
      
    </div>
  );
}

export default App;
