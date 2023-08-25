import React, { useEffect, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './styles/aboutMeStyle.css';

const Aboutme = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  const handleScroll = () => {
    const elementAboutMe = document.getElementById('aboutMe');

    if (elementAboutMe && isElementVisible(elementAboutMe)) {
      setAboutMeVisible(true);
    }
  };

  const isElementVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const topOffset = 500;

    return rect.top + topOffset < windowHeight && rect.bottom > 300;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const skills = document.querySelectorAll('.skills__li i');

    skills.forEach((skill) => {
      const rotationTime = Math.random() * 9 + 3; // Genera un tiempo aleatorio entre 3 y 9 segundos
      skill.style.animationDuration = `${rotationTime}s`;
    });
  }, []);
  return (
    <div
      className="aboutMe__container"
      style={{ opacity: aboutMeVisible ? 1 : 0, transition: 'opacity 1s ease' }}
    >
      <div className="aboutMe__date" id="aboutMe">
        <h2>Sobre Mí</h2>
        <p>
          Hola, mi nombre es Emerson, pero mis amigos me llaman "Reizor". Soy una persona
          autodidacta. Desde que conocí el mundo de la programación, se ha convertido en mi
          pasatiempo favorito junto al deporte de contacto "mma".
        </p>
        <p>
          Tengo excelentes habilidades de comunicación. Me encanta colaborar y trabajar en equipo.
          Actualmente, estoy buscando un trabajo de tiempo completo como desarrollador full-stack ,
          front-end o back-end.
        </p>
      </div>
      <div className="skills" id="skill">
        <h2>Mis Habilidades</h2>
        <ul className="skills__ul">
          <li className="skills__li javascript">
            <i className="bx bxl-javascript"></i>
            <span>JavaScript</span>
          </li>
          <li className="skills__li html5">
            <i className="bx bxl-html5"></i>
            <span>Html</span>
          </li>
          <li className="skills__li css3">
            <i className="bx bxl-css3"></i>
            <span>Css</span>
          </li>
          <li className="skills__li react">
            <i className="bx bxl-react"></i>
            <span>React js</span>
          </li>
          <li className="skills__li angular">
            <i className="bx bxl-angular"></i>
            <span>Angular</span>
          </li>
          <li className="skills__li bootstrap">
            <i className="bx bxl-bootstrap"></i>
            <span>Bootstrap</span>
          </li>
          <li className="skills__li nodejs">
            <i className="bx bxl-nodejs"></i>
            <span>Node Js</span>
          </li>
          <li className="skills__li postgresql">
            <i className="bx bxl-postgresql"></i>
            <span>Postgre SQL</span>
          </li>
          <li className="skills__li blender">
            <i className="bx bxl-blender"></i>
            <span>Blender</span>
          </li>
          <li className="skills__li php">
            <i className="bx bxl-php"></i>
            <span>php</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
