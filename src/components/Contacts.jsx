import React, { Suspense, useEffect, useState } from 'react';
import './styles/contactStyle.css';

const Contacts = () => {
  return (
    <div className="contact__container" id="contacMe">
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
