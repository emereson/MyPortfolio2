import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeThemeColor, setactiveThemeColor] = useState(false);
  const [fontColor, setfontColor] = useState('red');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleActiveThemeMode = () => {
    setactiveThemeColor(!activeThemeColor);
  };
  useEffect(() => {
    // Se ejecutará cada vez que darkMode o fontColor cambie
    document.body.className = ` ${darkMode ? 'light-mode' : ''} ${
      fontColor === 'red'
        ? 'theme__red'
        : fontColor === 'orange'
        ? 'theme__orange'
        : fontColor === 'green'
        ? 'theme__green'
        : fontColor === 'blue'
        ? 'theme__blue'
        : 'theme__pink'
    }`;

    // Función de limpieza para eliminar las clases cuando el componente se desmonta
    return () => {
      document.body.className = '';
    };
  }, [darkMode, fontColor]); // Dependencias del efecto

  return (
    <>
      <section className={` app__modeColor  ${activeThemeColor ? 'activeThemeColor' : ''}`}>
        <div className="appModeColor__iconsContainer">
          <i className="bx bxs-cog bx-spin" onClick={toggleActiveThemeMode}></i>
          {darkMode ? (
            <i className="bx bxs-moon" onClick={toggleDarkMode}></i>
          ) : (
            <i className="bx bxs-sun" onClick={toggleDarkMode}></i>
          )}
        </div>
        <div className="appModeColor__themeColors">
          <p>Theme Colors</p>
          <ul>
            <li onClick={() => setfontColor('red')} style={{ backgroundColor: '#dc3128' }}></li>
            <li onClick={() => setfontColor('orange')} style={{ backgroundColor: '#f26d00' }}></li>
            <li onClick={() => setfontColor('green')} style={{ backgroundColor: '#16af6d' }}></li>
            <li onClick={() => setfontColor('blue')} style={{ backgroundColor: '#0022aa' }}></li>
            <li onClick={() => setfontColor('pink')} style={{ backgroundColor: '#b20e8c' }}></li>
          </ul>
        </div>
      </section>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-me" element={<Contacts />} />
      </Routes>
      <a
        className="icon_whatsapp"
        href="https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola%2C+buenos+días%21+Estoy+en+busca+de+servicios+de+programación+y+me+preguntaba+si+podrías+ayudarme.+&type=phone_number&app_absent=0"
        target="_blank"
      >
        <img src="/whatsapp.png" alt="contactame por whatsApp" />
      </a>
    </>
  );
}

export default App;
