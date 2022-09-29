import React from 'react'
import { useState } from 'react';
import * as THREE from 'three/build/three.module'

//for react-fiber (not work)
import { Canvas, Camera, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";




//styles





//fiber
const Model = () => {
    const gltf = useLoader(GLTFLoader, '/Organ.gltf');
    return (
    <>
      <primitive object={gltf.scene}
        scale={1.3}
        position={[-2,-5,0]}
        dispose={null}
      />



    </>
  );
};







function OrganButton({handleClick}){



  return (
      <div className = 'organ'
      style={{width: '20vw',
      height: '20vh',

      zIndex:'1',
      
      border:'5px solid #a7c6c6',
        backgroundColor:'black',
        borderRadius:'1rem',
      
    }} onClick = {handleClick}>

      
      

      <Canvas frameloop="demand" camera={{ position: [0, 4, 6], view:{Model} }} mode="concurrent" >
      <spotLight intensity={2}  position={[30, 40, 50]} penumbra={1} color="#DEABAB" />
        
        <Suspense fallback={null}>
          <OrbitControls/>
          
          <Model/>
          <Environment preset='sunset' background={false}/>
        </Suspense>
      </Canvas>
    </div>
  );
}


 export default OrganButton