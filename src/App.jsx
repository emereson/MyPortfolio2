import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/model.gltf');
  return <primitive object={gltf.scene} />;
}

function App() {
  return (
    <>
      <h1>¡Hola mundo!</h1>
      <div style={{ height: "80vh", width: "100%" }}>
        <Canvas camera={{ zoom: 4, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 35, 35]} intensity={3} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;