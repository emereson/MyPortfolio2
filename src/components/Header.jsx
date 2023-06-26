import React, { useEffect, useState } from 'react';
import './styles/headerStyle.css';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactMeVisible, setContactMeVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setScrolling(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setScrolling(false);
      }, 500); // Ajusta el tiempo en milisegundos según tus necesidades
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elementHome = document.getElementById('home');
      const elementAboutMe = document.getElementById('aboutMe');
      const elementSkill = document.getElementById('skill');
      const elementProjects = document.getElementById('projects');
      const elementContactMe = document.getElementById('contacMe');

      if (elementHome && isElementVisible(elementHome)) {
        setHomeVisible(true);
      } else {
        setHomeVisible(false);
      }

      if (elementAboutMe && isElementVisible(elementAboutMe)) {
        setAboutMeVisible(true);
      } else {
        setAboutMeVisible(false);
      }

      if (elementSkill && isElementVisible(elementSkill)) {
        setSkillVisible(true);
      } else {
        setSkillVisible(false);
      }

      if (elementProjects && isElementVisible(elementProjects)) {
        setProjectsVisible(true);
      } else {
        setProjectsVisible(false);
      }

      if (elementContactMe && isElementVisible(elementContactMe)) {
        setContactMeVisible(true);
      } else {
        setContactMeVisible(false);
      }
    };

    const isElementVisible = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 500;

      return rect.top + topOffset < windowHeight && rect.bottom > 300;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? 'scrolling-bg' : ''}`}>
      <ul>
        <li>
          <a className={homeVisible ? 'a__animacion' : 'header__a'} href="#home">Inicio</a>
        </li>
        <li>
          <a className={aboutMeVisible ? 'a__animacion' : 'header__a'} href="#aboutMe">Sobre Mí</a>
        </li>
        <li>
          <a className={skillVisible ? 'a__animacion' : 'header__a'} href="#skill">Habilidades</a>
        </li>
        <li>
          <a className={projectsVisible ? 'a__animacion' : 'header__a'} href="#projects">Proyectos</a>
        </li>
        <li>
          <a className={contactMeVisible ? 'a__animacion' : 'header__a'} href="#contacMe">Contáctame</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
