import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

const LazyHome = lazy(() => import('./components/Home'));
const LazyAboutme = lazy(() => import('./components/Aboutme'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyContacts = lazy(() => import('./components/Contacts'));

function App() {
  return (
    <div className="app_container">
      <div className="film-effect"></div>

      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHome />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAboutme />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyProjects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyContacts />
      </Suspense>
    </div>
  );
}

export default App;
