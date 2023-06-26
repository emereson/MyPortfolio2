import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import './styles/contactStyle.css';

const Contacts = () => {

  const [aboutMeVisible, setAboutMeVisible] = useState(false);

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
        <Canvas camera={{ zoom: 2, position: [10, 8, 10] }}>
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
            <a href=""></a>
            <i className="bx bxl-facebook-circle"></i>
          </li>
          <li>
            <a href=""></a>
            <i className="bx bxl-whatsapp"></i>
          </li>
          <li>
            <a href=""></a>
            <i className="bx bxl-linkedin"></i>
          </li>
          <li>
            <a href=""></a>
            <i className="bx bxl-gmail"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
