import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header';

const LazyHome = lazy(() => import('./components/Home'));
const LazyAboutme = lazy(() => import('./components/Aboutme'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyContacts = lazy(() => import('./components/Contacts'));

function App() {
  return (
    <div className="app_container">
      <div className="app__img">
        <span></span>
        <img src="./font.png" alt="" />
      </div>

      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <LazyHome />
        <LazyAboutme />
        <LazyProjects />
        <LazyContacts />
      </Suspense>
    </div>
  );
}

export default App;
