import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header';

const LazyHome = lazy(() => import('./components/Home'));
const LazyAboutme = lazy(() => import('./components/Aboutme'));
const LazyServices = lazy(() => import('./components/Services'));
const LazyPortfolio = lazy(() => import('./components/Portfolio'));
const LazyContacts = lazy(() => import('./components/Contacts'));

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

  return (
    <div
      className={`app_container ${darkMode ? 'light-mode' : ''} ${
        fontColor === 'red'
          ? 'theme__red'
          : fontColor === 'orange'
          ? 'theme__orange'
          : fontColor === 'green'
          ? 'theme__green'
          : fontColor === 'blue'
          ? 'theme__blue'
          : 'theme__pink'
      }`}
    >
      <Header />

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
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path="/aboutme"
          element={
            <Suspense>
              <LazyAboutme />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense>
              <LazyServices />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense>
              <LazyPortfolio />
            </Suspense>
          }
        />
        <Route
          path="/contact-me"
          element={
            <Suspense>
              <LazyContacts />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
