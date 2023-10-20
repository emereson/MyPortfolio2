import React, { useEffect, useState } from 'react';
import './styles/aboutMeStyle.css';

const Aboutme = () => {
  useEffect(() => {
    const skills = document.querySelectorAll('.skills__li i');

    skills.forEach((skill) => {
      const rotationTime = Math.random() * 9 + 3; // Genera un tiempo aleatorio entre 3 y 9 segundos
      skill.style.animationDuration = `${rotationTime}s`;
    });
  }, []);

  const descargarCV = () => {
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = './mi-cv.pdf';
    enlaceTemporal.download = 'Emerson_Wilson_CV.pdf';
    enlaceTemporal.click();
  };
  return (
    <div className="aboutMe__container">
      <section className="aboutMe__section-one">
        <article className="aboutMe__articleOne">
          <h2>Sobre Mí</h2>
          <p>
            ¡Saludos! Soy <span>Emerson</span>, aunque puedes llamarme <span>"Reizor"</span>. Me
            sumerjo con pasión en el fascinante mundo de la programación como autodidacta, donde la
            creatividad y el código van de la mano. Además, me encanta el trabajo en equipo,
            colaborar para alcanzar objetivos comunes. Cuando no estoy explorando el vasto terreno
            digital, me entrego con igual pasión a los deportes de contacto, con una inclinación
            especial por el MMA.
          </p>
        </article>
      </section>
      <section className="aboutMe__section-two">
        <article className="aboutMeSectionTwo__article-one">
          <ul>
            <li>
              Edad: <span>23 años</span>
            </li>
            <li>
              País: <span>Perú</span>
            </li>
            <li>
              Ciudad: <span>Juliaca</span>
            </li>
            <li>
              Freelance: <span>Disponible</span>
            </li>
            <li>
              Trabajo: <span>Buscando 😢</span>
            </li>
            <li>
              Email: <span>emerson@idotcode.com</span>
            </li>
            <li>
              Número: <span>+51 927 482 386</span>
            </li>
            <li>
              Whatsapp: <span>+51 927 482 386</span>
            </li>
          </ul>
          <div className="aboutMeSectionTwo__buttons">
            <button onClick={descargarCV}>Descargar CV</button>
            <button>
              <a href="https://wa.link/ohedux" target="_blank" rel="noopener noreferrer">
                Contactarme
              </a>
            </button>
          </div>
        </article>
        <article className="skills" id="skill">
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
            <li className="skills__li html5">
              <i className="bx bxl-python"></i>
              <span>Python</span>
            </li>
            <li className="skills__li react">
              <i className="bx bxl-wordpress"></i>
              <span>Wordpress</span>
            </li>
            <li className="skills__li github">
              <i className="bx bxl-github"></i>
              <span>Git Hub</span>
            </li>
            <li className="skills__li vuejs">
              <i className="bx bxl-vuejs"></i>
              <span>Vue Js</span>
            </li>
            <li className="skills__li java">
              <i className="bx bxl-java"></i>
              <span>Java</span>
            </li>
          </ul>
        </article>
      </section>
      <section className="aboutMe__section-three">
        <article className="aboutMe__educationContainer">
          <h3>Educación</h3>
          <span></span>
          <div className="aboutMeEducation__data">
            <p className="aboutMeEducationData__date">
              <span></span>
              <i className="bx bxs-calendar"> </i>
              2022 - 2023
            </p>
            <h4>Bootcamp en Academlo</h4>
            <p className="aboutMeEducationData__p">
              En el transcurso de este bootcamp, culminé mi formación como desarrollador full-stack.
              Durante el programa, adquirí habilidades en el desarrollo de aplicaciones y páginas
              web utilizando tecnologías como React.js y Node.js.
            </p>
          </div>
          <div className="aboutMeEducation__data">
            <p className="aboutMeEducationData__date">
              <span></span>
              <i className="bx bxs-calendar"></i>
              2022 - 2023
            </p>
            <h4>Bootcamp en Platzi</h4>
            <p className="aboutMeEducationData__p">
              Durante este bootcamp, obtuve mi graduación como desarrollador full-stack, donde
              adquirí conocimientos para desarrollar aplicaciones y páginas web utilizando Angular y
              Nest.js. Este programa me proporcionó una sólida base en estas tecnologías clave del
              desarrollo web.
            </p>
          </div>
          <div className="aboutMeEducation__data">
            <p className="aboutMeEducationData__date">
              <span></span>
              <i className="bx bxs-calendar"></i>
              2020 - 2023
            </p>
            <h4>Ingeniería de Software</h4>
            <p className="aboutMeEducationData__p">
              Mi carrera técnica en Ingeniería de Software quedó inconclusa debido a problemas en mi
              país. A lo largo de la experiencia, adquirí habilidades en análisis de datos y
              desarrollo de aplicaciones con Java, Python, C++, entre otros.
            </p>
          </div>
        </article>
        <article className="aboutMe__educationContainer">
          <h3>Experiencia</h3>
          <span></span>
          <div className="aboutMeEducation__data">
            <p className="aboutMeEducationData__date">
              <span></span>
              <i className="bx bxs-calendar"></i>
              2022 - 2023
            </p>
            <h4>Experiencia como Freelance</h4>
            <p className="aboutMeEducationData__p">
              Aunque no tengo experiencia laboral en empresas, he dedicado un año completo a
              trabajar como freelance, desarrollando diversos proyectos para mis clientes. Esta
              experiencia me ha permitido perfeccionar mis habilidades y abordar desafíos de manera
              creativa y efectiva.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Aboutme;
