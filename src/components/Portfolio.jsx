import React from 'react';
import './styles/projectsStyle.css';
import { useState } from 'react';
import freelans from '../jsons/freelans.json';
import projects from '../jsons/projects.json';
import useIntersectionObserverOnResize from '../hook/useIntersectionObserverOnResize';

const Portfolio = () => {
  useIntersectionObserverOnResize('Projects_sliderPrin1');
  useIntersectionObserverOnResize('Projects_sliderPrin2');
  const [viewProyects, setviewProyects] = useState(false);

  freelans.forEach((free) => {
    useIntersectionObserverOnResize(free.title);
  });
  projects.forEach((free) => {
    useIntersectionObserverOnResize(free.title);
  });

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

      <section className="Project_sectionTwo">
        <h2>
          <i class="bx bx-code-alt"></i> Proyectos
        </h2>
        <div className="Project_sectionTwo_buttons">
          <button
            className={`Project_sectionTwo_button ${
              viewProyects ? '' : 'Project_sectionTwo_activeButton'
            }`}
            onClick={() => setviewProyects(false)}
          >
            Freelance
          </button>
          <button
            className={`Project_sectionTwo_button ${
              !viewProyects ? '' : 'Project_sectionTwo_activeButton'
            }`}
            onClick={() => setviewProyects(true)}
          >
            {' '}
            Personales
          </button>
        </div>
        <div className="Project_sectionTwo_cardsContainer">
          {projects?.map((project) => (
            <article
              className="Project_sectionTwo_card"
              key={project.id}
              id={project.title}
              style={{ display: viewProyects ? 'flex' : 'none' }}
            >
              <img
                className="Project_sectionTwo_card_img"
                src={project.projectImg}
                alt={project.title}
              />
              <div className="Project_sectionTwo_card_dataContainer">
                <div className="Project_sectionTwo_card_data_text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
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
        </div>
        <div className="Project_sectionTwo_cardsContainer">
          {freelans?.map((project) => (
            <article
              className="Project_sectionTwo_card"
              key={project.id}
              id={project.title}
              style={{ display: !viewProyects ? 'flex' : 'none' }}
            >
              <img
                className="Project_sectionTwo_card_img"
                src={project.projectImg}
                alt={project.title}
              />
              <div className="Project_sectionTwo_card_dataContainer">
                <div className="Project_sectionTwo_card_data_text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
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
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
