import React, { useEffect, useState } from 'react';
import './styles/homeStyle.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    'Desarrollador Web',
    'Programador Web',
    'Diseñador Web',
    'Programador de Sistemas',
    'Programador de Aplicaciones',
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [services.length]);

  const currentService = services[currentServiceIndex];
  return (
    <div className="home__container" id="home">
      <section className="home__section-one">
        <div className="home__date">
          <h1 className="homeDate__h2">
            Hola, mi nombre es <span>Emerson Wilson</span>
          </h1>
          <h2 className="homeDate__h3">
            Soy <span>{currentService}</span>
          </h2>

          <p>
            Apasionado por la tecnología, me encuentro preparado para enfrentar con entusiasmo los
            desafíos que el fascinante mundo de la programación me ofrece.
          </p>
          <Link className="home__link" to="/aboutme">
            Sobre Mí <i className="bx bxs-chevron-down"></i>
          </Link>
        </div>
      </section>
      <section className="home__section-two">
        <article className="homeSectionTwo__articleOne">
          <span></span> <span></span>
        </article>
        <img src="./home.png" alt="" />
        <article className="homeSectionTwo__articleTwo">
          <span></span> <span></span>
        </article>
      </section>
    </div>
  );
};

export default Home;
