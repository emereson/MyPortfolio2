import React, { useEffect, useState } from 'react';
import './styles/projectsStyle.css';

const Projects = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [showProjects, setshowProjects] = useState(false);
  const [imageQr, setImageQr] = useState(false);

  const handleScroll = () => {
    const elementAboutMe = document.getElementById('projects');

    if (elementAboutMe && isElementVisible(elementAboutMe)) {
      setAboutMeVisible(true);
      setTimeout(() => {
        setshowProjects(true);
      }, 1000);
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

  return (
    <div
      className="projects__container"
      style={{ opacity: aboutMeVisible ? 1 : 0, transition: 'opacity 2s ease' }}
      id="projects"
    >
      <div className="projects__dates">
        <h2>Mis Proyectos</h2>
        <span>
          Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos
          prácticos de mi trabajo. Cada proyecto se describe brevemente y se proporcionan enlaces a
          los repositorios de código y a demos en vivo. Estos proyectos reflejan mi capacidad para
          resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de
          manera efectiva.
        </span>
      </div>
      <div className="projects__informationProjects">
        <div className="projects__oneProjects oneProjects1">
          <div className="pojects__oldEfect"> </div>
          <img src="./qrPet.png" alt="" />
          <h3>Aquí Estoy</h3>
          <p>
            Esta página fue creada para una veterinaria donde tendrás que escanear el código QR que
            está en el collar de la mascota.
            <br />
            La persona que escanee el QR tendrá la información de la mascota junto con su ubicación
            actual, esto es posible gracias a la geolocalización de Google Maps. Además, tendrás la
            opción de compartir la ubicación actual.
          </p>
          <ul>
            <li>#Node.js</li>
            <li>#React.js</li>
            <li>#PostgreSQL</li>
            <li>#Google Maps</li>
          </ul>

          <a
            className="projects_link"
            onClick={() => {
              setImageQr(true);
            }}
          >
            Probar QR
          </a>
          {imageQr ? (
            <div className="project__imageQr">
              <img src="./qr.png" alt="" />
              <p
                onClick={() => {
                  setImageQr(false);
                }}
              >
                cerrar imagen
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div
          className="projects__oneProjects oneProjects2"
          style={{
            transform: showProjects ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 1s ease',
          }}
        >
          <div className="pojects__oldEfect"> </div>
          <img src="./ligaPadel.png" alt="" />
          <h3>Liga Padel</h3>
          <p>
            Liga Padel fue mi primer proyecto como desarrollador freelance. Su función principal es
            permitir a mi cliente crear eventos como ligas, torneos y americanos. También se pueden
            agregar calendarios, imágenes de los jugadores, patrocinadores, entre otros elementos.
            <br />
            El usuario puede inscribirse a cualquier evento a través de la página.
          </p>
          <ul>
            <li>#Node Js</li>
            <li>#React Js</li>
            <li>#Postgre SQL</li>
          </ul>
          <a
            href="https://strong-pixie-20867c.netlify.app/"
            target="_blank"
            className="projects_link"
          >
            ver pagina
          </a>
        </div>
        <div
          className="projects__oneProjects oneProjects3"
          style={{
            transform: showProjects ? 'translateX(0)' : 'translateX(-200%)',
            transition: 'transform 2s ease',
          }}
        >
          <div className="pojects__oldEfect"> </div>
          <img src="./netflyx.png" alt="" />
          <h3>Netflyx</h3>
          <p>
            Este es un proyecto personal, es una página donde podrás ver todos los tráilers o
            adelantos de la película o serie que te interese, cuenta con la opción de buscar y
            filtrar la serie que desees por su nombre o género.
          </p>
          <ul>
            <li>#React Js</li>
          </ul>

          <a
            href="https://dulcet-cucurucho-90d923.netlify.app/"
            target="_blank"
            className="projects_link"
          >
            ver pagina
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
