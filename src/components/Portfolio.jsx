import React, { useEffect } from 'react';
import './styles/projectsStyle.css';
import { useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setprojects] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/project`;

    axios
      .get(url)
      .then((res) => setprojects(res.data))
      .catch((err) => console.log(err));
  }, []);

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
        {projects?.projects.map((project) => (
          <article className="portfolio__project" key={project.id}>
            <div className="portfolioProject__img">
              <img src={project.projectImg} alt="" />
            </div>
            <div className="portfolioProject__data">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.linkPage === '1' ? (
                <span></span>
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
