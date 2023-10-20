import React from 'react';
import './styles/projectsStyle.css';

const Portfolio = () => {
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
        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./logoHenry.png" alt="" />
          </div>
          <div className="portfolioProject__data">
            <h3>Henry Gil Weddings </h3>
            <p>
              Diseñada para un talentoso camarógrafo profesional, esta página muestra su
              impresionante trabajo en forma de videos de alta calidad y una variada galería de
              imágenes capturadas en diferentes situaciones y lugares.
            </p>

            <a
              href="https://henrygilweddings.com"
              target="_blank"
              className="portfolioProject__link"
            >
              ver pagina
            </a>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./logoPadel.png" alt="" />
          </div>
          <div className="portfolioProject__data">
            <h3>Liga Padel</h3>
            <p>
              Liga Padel, mi primer proyecto como desarrollador freelance, permite a los usuarios
              crear y participar en eventos de pádel, con funciones que incluyen inscripciones,
              calendarios y detalles de jugadores.
            </p>
            <a
              href="https://strong-pixie-20867c.netlify.app/"
              target="_blank"
              className="portfolioProject__link"
            >
              ver pagina
            </a>
          </div>
        </article>

        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./colegioLogo.png" alt="" style={{ width: '60%' }} />
          </div>
          <div className="portfolioProject__data">
            <h3>Alipio Ponce </h3>
            <p>
              Sistema de control, permitiendo al director y profesores gestionar asistencias, notas,
              observaciones, exámenes y mensualidades de los estudiantes de manera eficiente.
            </p>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./policlinico.png" alt="" />
          </div>
          <div className="portfolioProject__data">
            <h3>Poclinico</h3>
            <p>
              Desarrollé esta página para un policlínico local. Los pacientes pueden revisar sus
              ecografías y realizar consultas directamente a través de la plataforma web.
            </p>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./netflyx.png" alt="" />
          </div>
          <div className="portfolioProject__data">
            <h3>Netflyx</h3>
            <p>
              Explora tráilers de películas y series en esta página personalizada. Busca y filtra
              por nombre o género para encontrar contenido que te interese.
            </p>
            <a
              href="https://dulcet-cucurucho-90d923.netlify.app/"
              target="_blank"
              className="portfolioProject__link"
            >
              ver pagina
            </a>
          </div>
        </article>
        <article className="portfolio__project">
          <div className="portfolioProject__img">
            <img src="./qrPet.png" alt="" />
          </div>
          <div className="portfolioProject__data">
            <h3>Aquí Estoy</h3>
            <p>
              Escanea el código QR en el collar de la mascota para acceder a su información y
              ubicación actual a través de Google Maps. También puedes compartir la ubicación.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Portfolio;
