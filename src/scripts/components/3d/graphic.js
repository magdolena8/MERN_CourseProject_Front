import React from 'react'
import * as THREE from 'three/build/three.module'

//for react-fiber (not work)
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

//backgroiund image
import background from "../../../media/sun.png"


//styles


//fiber
const Model = () => {
  const gltf = useLoader(GLTFLoader, '/neon5.gltf');
  return (
    <>
      <primitive object={gltf.scene}
        scale={0.2}
        position={[-0.5,-1.0,5]}
        rotation={[-0.27,1.57,0.2]} />
    </>
  );
};

function Scene(){
  return (
    <div className = 'Road'
    style={{width: '100vw',
     height: '100vh', 
     backgroundColor:'black',
     backgroundImage: `url(${background})`, 
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundSize: '50%',
     position:'absolute',
     zIndex:'-1',
     }}>

      
      
      
      <Canvas mode="concurrent" frameloop="demand">
        
        <Suspense fallback={null}>
          {/* <OrbitControls/> */}
          <Model/>
          <Environment preset='sunset' background={false}/>
        </Suspense>
      </Canvas>
    </div>
  );
}


 export default Scene