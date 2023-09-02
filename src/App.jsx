import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const LazyHome = lazy(() => import('./components/Home'));
const LazyAboutme = lazy(() => import('./components/Aboutme'));
const LazyProjects = lazy(() => import('./components/Projects'));
const LazyContacts = lazy(() => import('./components/Contacts'));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="app_container">
      <div className="film-effect"></div>
      {!loading ? (
        <div className="loading__container">
          <Player className="loading__player" autoplay loop speed={1.4} src="./hello.json">
            <Controls visible={false} />
          </Player>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
