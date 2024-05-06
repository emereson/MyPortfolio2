import React, { useEffect } from 'react';
import './styles/projectsStyle.css';
import { useState } from 'react';
import projects from '../../projects.json';
import ReactPlayer from 'react-player';

const Portfolio = () => {
  const [viewGif, setviewGif] = useState(false);
  setTimeout(() => {
    setviewGif(true);
  }, 2000);

  return (
    <div className="portfolio__container">
      <section className="portfolio__section-one">
        <h2>Explora Mis Proyectos</h2>
        <p>
          Sumérgete en un mundo donde la innovación se entrelaza con la creatividad. Aquí, cada
          proyecto es más que código y diseño; es una expresión de dedicación, compromiso y pasión.
          Te invito a descubrir ejemplos que no solo destacan mis habilidades técnicas, sino también
          el impacto transformador que aporto a cada cliente.
        </p>
      </section>

      <section className="portfolio__section-two">
        {projects?.map((project) => (
          <article className="portfolio__project" key={project.id}>
            <div className="portfotlioProjec__img">
              <img src={project.projectImg} alt={project.title} />
              <ReactPlayer
                className="portfolioProject__img__viewGif"
                playing={true}
                volume={0}
                url={`./${project.projectGif}`}
                loop={true}
                width="100%"
                height="200px"
                style={viewGif ? { opacity: '1' } : { opacity: '0' }} // Se agrega el else y se cierra la llave
              />
            </div>
            <div className="portfolioProject__data">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.linkPage === null ? (
                <a
                  href={`https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola, buenos días! Acabo de ver su portafolio y estoy interesado en ver el demo de ${project.title}.&type=phone_number&app_absent=0`}
                  target="_blank"
                  className="portfolioProject__link"
                >
                  Solicitar Demo
                </a>
              ) : (
                <a href={project.linkPage} target="_blank" className="portfolioProject__link">
                  ver pagina
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
