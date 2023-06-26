import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import './styles/contactStyle.css';

const Contacts = () => {
  
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const Model = () => {
    const gltf = useGLTF('/tree.gltf');
    return <primitive object={gltf.scene} />;
  };


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

const zoom = windowWidth < 850 ? 1.3 : 2;
const cameraPosition = [10, 8, 10];
  return (
    <div className="contact__container" style={{ opacity: aboutMeVisible ? 1 : 0, transition: 'opacity 2s ease' }} id='contacMe'>
      <section>
        <div className="set">
          {[...Array(20)].map((_, index) => (
            <div key={index}>
              <img src="/petalo.png" alt="" />
            </div>
          ))}
        </div>
      </section>
      <div className="contact__canvas">
      <Canvas camera={{ zoom, position: cameraPosition }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color={'rgb(222, 106, 188)'} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate target={[0, 6, 0]} />
        </Canvas>
      </div>
      <div className="contact__date">
        <h2>Contactame</h2>
        <span>
          Si te gustaron algunos de mis proyectos y nesecita  ayuda para desarrollar una pagina
          web, por favor pongase en contacto conmigo mediante los links que estaran aqui abajo.
        </span>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100087974955688" target='_blank' >
            <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.link/ohedux" target='_blank'>
            <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/emerson-yujra-997b52260" target='_blank'>
            <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
          <a href="mailto:escanorrosa123@gmail.com" target='_blank'>
            <i className="bx bxl-gmail"></i>
          </a>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
