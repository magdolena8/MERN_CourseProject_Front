import React from 'react'
import { useState } from 'react';

import { Canvas, Camera, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";



//fiber
const Model = () => {
    const gltf = useLoader(GLTFLoader, '/camera.gltf');
    return (
    <>
      <primitive object={gltf.scene}
        scale={1.2}
        position={[0.7,-1.3,0.2]}
        dispose={null}
      />



    </>
  );
};







function CameraButton({handleClick}){
    const [isHevered, setIsHovered] = useState(false);






  return (
      <div className = 'gamepad'
      style={{width: '20vw',
      height: '20vh',
      zIndex:'1',
      border:'5px solid #a7c6c6',backgroundColor:'black',
      borderRadius:'1rem',
      boxShadow:'4px 4px 35px 0px rgba(123, 181, 225, 0.2)'
        
    }} onClick = {handleClick} >

      
      
      
      <Canvas frameloop="demand" camera={{ position: [5, 0, 0], view:{Model}  }} mode="concurrent" >
      <pointLight intensity={2}  position={[30, 40, 50]} penumbra={1} color="#DEABAB" />
        
        <Suspense fallback={null}>
          <OrbitControls/>
          <Model/>
          <Environment preset='sunset' background={false}/>
        </Suspense>
      </Canvas>
    </div>
  );
}


 export default CameraButton