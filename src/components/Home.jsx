import React from 'react';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import './styles/homeStyle.css';

const Home = () => {
  return (
    <div className="home__container" id="home">
      <article className="home__article-one">
        <Player className="moon__player" autoplay loop src="./moon.json">
          <Controls visible={false} />
        </Player>
      </article>

      <article className="home__article-two">
        <Player className="home__player" autoplay loop src="./home.json">
          <Controls visible={false} />
        </Player>
        <div className="home__date">
          <h2>Hola, soy Emerson Wilson</h2>
          <h3>Fullstack Developer</h3>

          <p>
            Desarrollador web Full Stack apasionado por la tecnología, preparado para afrontar con
            entusiasmo los desafíos que el fascinante mundo de la programación me presenta.
          </p>
          <a className="home__a" href="#aboutMe">
            Sobre Mí <i class="bx bxs-chevron-down"></i>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Home;
