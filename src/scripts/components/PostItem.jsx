import React, {useState} from 'react'
import Form from './Form';
import gamepadIcon from '../../media/gamepad_icon.svg'
// import cameraIcon from '../../media/camera_logo.svg'
import "../../styles/PostItem.css"


export default function PostItem({post}) {

  const [formState,
    setFormState] = useState(false);

  const handleSignUp = () => {
    setFormState(!formState)
  }

  return (
    <div className="post_item">
      <li>
        <img className="icon"
          src={gamepadIcon}
          alt={gamepadIcon}
          style={{
          height: 50,
          width: 50
        }}/>
        <div>
          <div className="head">
            <h3 className="title">{post.title}</h3>
            <h4 className="date">{post.date}</h4>
          </div>
          <div className="eventInfo">{post.eventInfo}</div>
        </div>
        <button onClick={handleSignUp} className="signup_btn">SIGN UP</button>
      </li>

      {formState && <Form eventName={post.title} backHandler={handleSignUp} eventDate={post.date}/>}
    </div>
  )
}