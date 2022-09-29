import React from 'react'
import * as THREE from 'three/build/three.module'
import { useState } from 'react/cjs/react.development';

//for react-fiber (not work)
import { Canvas, Camera, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Position } from '@react-three/drei/helpers/Position';




//styles


//fiber
const Model = () => {
  const gltf = useLoader(GLTFLoader, '/gamepad2.gltf');
  return (
    <>
      <primitive object={gltf.scene}
        scale={0.7}
        position={[0.5,-1.3,0.5]}
 />
    </>
  );
};






function GamepadButton({handleClick}){

  //state
  const [isActive, setIsActive] = useState(false)




  return (
    <div className = 'camera'
    style={{width: '20vw',
        height: '20vh', zIndex:'1',border:'5px solid #a7c6c6',
        backgroundColor:'black',
        borderRadius:'1rem',
     }}
     onClick={handleClick} //may be not string to updete
     >

      
      
      
      <Canvas frameloop="demand" onPointerEnter={()=>setIsActive(!isActive)}>
      <spotLight intensity={12} position={[50, 40, 60]} penumbra={1} color="#DEABAB" />
        <Suspense fallback={null}>
          <OrbitControls/>
          <Model/>
          <Environment preset='sunset' background={false}/>
        </Suspense>
      </Canvas>
    </div>
  );
}


 export default GamepadButton