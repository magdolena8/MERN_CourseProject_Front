import react, {useState} from 'react'
import PostItem from './PostItem'

//JSON
import "../../styles/Events.css"
import * as data from '../../textes.json'

// Back Icon
import backIcon from "../../media/gamepad_icon.svg"

export default function Events({state, backHandler}) {

  return (
    <div>

      <div className={state.events
        ? "panel active"
        : 'panel'}>
        <div className="head">

          <button
            className="back_btn"
            onClick={backHandler}
            style={{
            backgroundImage: backIcon
          }}>BACK</button>

          <h1>EVENTS SCHEDULE</h1>
        </div>
        {/* sort by
        <select>
          <option value="byName">Name</option>
          <option value="byDate">Date</option>
        </select> */}

        <ul className="schedule">
          {data
            .events
            .map((post) => <PostItem post={post}/>)}

        </ul>

      </div>
      {state.events && <div className="blur_panel"></div>}
    </div>
  )
}