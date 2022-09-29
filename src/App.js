import {useState} from 'react';
import { useEffect } from 'react';
// import Data from './scripts/Data';

//
import * as data from '../src/textes.json'

//

import Header from './scripts/Header';
import Footer from './scripts/Footer'
import Main from './scripts/Main'
import Scene from './scripts/components/3d/graphic'
import GamepadButton from './scripts/components/3d/GamepadButton';
import CameraButton from './scripts/components/3d/CameraButton';
import OrganButton from './scripts/components/3d/OrganButton';
import Panel from './scripts/components/Panel';



//styles
import './app.css'

export default function App() {


  //States
  const [infoState,
    setInfoState] = useState({gamepad: false, camera: false, organ: false});

  const [panelState,
    setPanelState] = useState({gamepad: false, camera: false, organ: false, history: false, aboutUs:false, events:false});
  
  //Handlers For INFO
  const handleGamepad = () => {
    setInfoState({
      gamepad: !panelState.gamepad,
      camera: false,
      organ: false
    })
  }
  const handleCamera = () => {
    setInfoState({
      gamepad: false,
      camera: !panelState.camera,
      organ: false
    })
  }
  const handleOrgan = () => {
    setInfoState({
      gamepad: false,
      camera: false,
      organ: !panelState.organ
    })
  }
  
  //For PANEL
  const handleBackBtn = () => {
    setPanelState({gamepad: false, camera: false, organ: false, history: false, events:false})
  }
  //For BURGER MENU
  const handleMain = () => {
    setInfoState({gamepad: false, camera: false, organ: false})
    handleBackBtn()
    }
    const handleHistory = () =>{
      setPanelState({history:true})
    }
    const handleAboutUs=()=>{
      setPanelState({aboutUs:true})
    }

  //For EVENTS SCHEDULE
  const handleEventBtn = () =>{
      setPanelState({events:true})
  }

  return (
    <div className="App">
      <Header handleMain={handleMain} handleHistory={handleHistory} handleAboutUs={handleAboutUs}/>
      <Main/>
      <div className='main_buttons'>

        <GamepadButton handleClick={handleGamepad}/>

        <CameraButton handleClick={handleCamera}/>

        <OrganButton handleClick={handleOrgan}/>

      </div>


      <div
        className={infoState.gamepad
        ? "gameInfo active"
        : "gameInfo"}>
        {data.gameInfo}<button className="more_btn" onClick={() => setPanelState({gamepad: true})}>KNOW MORE</button>
      </div>

      <div
        className={infoState.camera
        ? "cameraInfo active"
        : "cameraInfo"}>
        {data.cameraInfo}<button className="more_btn"  onClick={() => setPanelState({camera: true})}>KNOW MORE</button>
      </div>

      <div
        className={infoState.organ
        ? "organInfo active"
        : "organInfo"}>
        {data.organInfo}<button className="more_btn"  onClick={() => setPanelState({organ: true})}>KNOW MORE</button>
      </div>
      <Panel panelState={panelState} backHandler={handleBackBtn} eventsBtnHandler={handleEventBtn}/>
      <Scene/>
    </div>
  );
}