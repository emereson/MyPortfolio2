import React, { useEffect, useState } from 'react';
import './styles/headerStyle.css';
import { ImHome } from 'react-icons/im';
import { FaUser } from 'react-icons/fa6';
import { FaList } from 'react-icons/fa6';
import { BsPersonWorkspace } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [locationLink, setlocationLink] = useState('/');
  const [menuClose, setmenuClose] = useState(true);

  useEffect(() => {
    const path = location.pathname;

    if (path.includes('services')) {
      setlocationLink('services');
    } else if (path.includes('aboutme')) {
      setlocationLink('aboutme');
    } else if (path.includes('portfolio')) {
      setlocationLink('portfolio');
    } else if (path.includes('contact-me')) {
      setlocationLink('contact-me');
    } else {
      setlocationLink('home');
    }
  }, [location.pathname]);

  const toggleMenuClose = () => {
    setmenuClose(!menuClose);
  };

  return (
    <header className="header">
      <section className="header__logo">
        <article className="headerLogo__articleOne">
          <span></span> <span></span>
        </article>
        <Link to="/">DotCode</Link>
        <article className="headerLogo__articleTwo">
          <span></span> <span></span>
        </article>
      </section>
      <ul className={`header__ul  ${menuClose ? 'headerUl__show' : ''}`}>
        <li>
          <Link
            to="/"
            className={locationLink === 'home' ? 'activeLink' : ''}
            onClick={toggleMenuClose}
          >
            <ImHome /> Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/aboutme"
            className={locationLink === 'aboutme' ? 'activeLink' : ''}
            onClick={toggleMenuClose}
          >
            <FaUser /> Sobre Mí
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={locationLink === 'services' ? 'activeLink' : ''}
            onClick={toggleMenuClose}
          >
            <FaList />
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={locationLink === 'portfolio' ? 'activeLink' : ''}
            onClick={toggleMenuClose}
          >
            <BsPersonWorkspace />
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/contact-me"
            className={locationLink === 'contact-me' ? 'activeLink' : ''}
            onClick={toggleMenuClose}
          >
            <AiFillMessage />
            Contáctame
          </Link>
        </li>
      </ul>
      {menuClose ? (
        <i className="bx bx-menu menuclose" onClick={toggleMenuClose}></i>
      ) : (
        <i className="bx bxs-x-circle menuclose" onClick={toggleMenuClose}></i>
      )}
    </header>
  );
};

export default Header;
