import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import Contacts from './components/Contacts';

function App() {
 
  return (
    <div className="app_container">
      <div className="app__img">
        <span></span>
        <img src="./font.png" alt="" />
      </div>

      <Header />
      <Home />
      <Aboutme />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
