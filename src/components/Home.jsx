import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './styles/homeStyle.css';

const Home = () => {
const [showCanvas, setshowCanvas] = useState(false)

  function Model() {
    const gltf = useGLTF('/gamer.gltf');
    return <primitive object={gltf.scene} />;
  }

  setTimeout(()=>{
    setshowCanvas(true)
  },5000)
 
  return (
    <div className="home__container" id="home">
      <div className="home__date">
        <h2>Hola, mi nombre es Emerson ! </h2>
        <h3>Soy desarrollador full-stack.</h3>
        <div className={showCanvas ? "homeDate__canvasContainer":''}>
          <Canvas camera={{ zoom: 2, position: [15, 8, 2] }}>
            <ambientLight intensity={1} />
            <pointLight position={[5, 50, 3]} intensity={15} color={[0.5, -0.5, 1.3]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate target={[0, 1, 1.5]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
