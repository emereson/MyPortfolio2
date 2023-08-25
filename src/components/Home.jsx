import React from 'react';

import { Controls, Player } from '@lottiefiles/react-lottie-player';
import './styles/homeStyle.css';

const Home = () => {
  // home
  return (
    <div className="home__container" id="home">
      <div className="home__date">
        <h2>Hola, mi nombre es Emerson ! </h2>
        <h3>Soy desarrollador full-stack.</h3>
        <Player className="home__player" autoplay loop src="./walle.json">
          <Controls visible={false} />
        </Player>
      </div>
    </div>
  );
};

export default Home;
