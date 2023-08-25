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
      <div className="film-effect"></div>
      <Header />
      <Suspense>
        <LazyHome />
        <LazyAboutme />
        <LazyProjects />
        <LazyContacts />
      </Suspense>
    </div>
  );
}

export default App;
