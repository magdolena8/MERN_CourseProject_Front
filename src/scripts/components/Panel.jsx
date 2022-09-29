import react from "react";
// import PostItem from "./PostItem"; carousel
import CustomCarousel from "./Carousel";
import {useState} from "react";
import Events from "./Events";
//Styles
import '../../styles/Panel.css'

//JSON
import * as data from '../../textes.json'

//Icons

export default function Panel({panelState, backHandler, eventsBtnHandler}) {

  return (
    <div >
      <div className={panelState.gamepad
        ? 'panel active'
        : 'panel'}>
        <iframe
          width="95%"
          height="90%"
          src="https://www.youtube.com/embed/P99qJGrPNLs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <div className="text">
        {data.gamepadPanel}
        </div>
        <div className='btns_conteiner'>
          <button className="back_btn" onClick={backHandler}>BACK</button>
          <button className="see_events_btn" onClick={eventsBtnHandler}>SEE EVENTS</button>
        </div>
      </div>
      <div className={panelState.camera
        ? 'panel active'
        : 'panel'}>
          <div className="text">
        {data.cameraPanel}</div>
        <CustomCarousel/>
        <div className='btns_conteiner'>
          <button className="back_btn" onClick={backHandler}>BACK</button>
          <button className="see_events_btn" onClick={eventsBtnHandler}>SEE EVENTS</button>
        </div>
      </div>
      <div className={panelState.organ
        ? 'panel active'
        : 'panel'}>
        <iframe //YouTube insert
          width="95%" height="90%" src="https://www.youtube.com/embed/XccPsuqAz4E?controls=0&amp;start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="text">
        {data.organPanel}</div>
        <div className="btns_conteiner">
          <button className="back_btn" onClick={backHandler}>BACK</button>
          <button className="see_events_btn" onClick={eventsBtnHandler}>SEE EVENTS</button>
        </div>
      </div>

      <div className={panelState.history
        ? 'panel active'
        : 'panel'}>
          <div className="text">
        {data.historyPanel}
        </div>
        <div className="btns_conteiner">
          <button className="back_btn" onClick={backHandler}>BACK</button>

        </div>
      </div>

      <div className={panelState.aboutUs
        ? 'panel active'
        : 'panel'}>
                    <div className="text">

        {data.aboutUsPanel}
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.283303993366!2d27.570109880241557!3d53.89116834156023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcff66b509bc1%3A0xe4b5f9d36b300e03!2sHide%20Club!5e0!3m2!1sru!2sby!4v1638790882660!5m2!1sru!2sby" style={{width:'80vw',maxWidth:'800px', height:'50vh'}} allowfullscreen="" loading="lazy"></iframe>
        <div className="btns_conteiner">
          <button className="back_btn" onClick={backHandler}>BACK</button>
        </div>
      </div>

      <Events
        state={panelState}
        backHandler={backHandler}
        eventsBtnHandler={eventsBtnHandler}/>
        {(panelState.gamepad||panelState.camera || panelState.aboutUs||panelState.history ||panelState.organ) && <div className="blur_panel"></div>}

    </div>
  )

}