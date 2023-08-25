import React, { Suspense, useEffect, useState } from 'react';
import './styles/contactStyle.css';

const Contacts = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  const handleScroll = () => {
    const elementAboutMe = document.getElementById('contacMe');

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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="contact__container"
      style={{ opacity: aboutMeVisible ? 1 : 0, transition: 'opacity 2s ease' }}
      id="contacMe"
    >
      <div className="contact__date">
        <h2>Contactame</h2>
        <span>
          Si te gustaron algunos de mis proyectos y nesecita ayuda para desarrollar una pagina web,
          por favor pongase en contacto conmigo mediante los links que estaran aqui abajo.
        </span>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100087974955688" target="_blank">
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.link/ohedux" target="_blank">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/emerson-yujra-997b52260" target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:escanorrosa123@gmail.com" target="_blank">
              <i className="bx bxl-gmail"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
