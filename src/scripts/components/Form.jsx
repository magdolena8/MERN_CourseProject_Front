import React from "react";
import {useState} from "react";
import '../../styles/Form.css'

export default function Form({eventName, eventDate, backHandler}) {
  const [formState,
    setFormState] = useState({userName: '', email: ''});

  const handleChange = (event) => {
    if (event.target.name === 'userNameField') {
      setFormState({
        ...formState,
        userName: event.target.value
      })
    }
    else{
      setFormState({
        ...formState,
        email: event.target.value
      })
    }
  }


const handleSubmit = (event) => {
  fetch('http://localhost:5000/api/sendmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({eventName: eventName, eventDate: eventDate, userName:formState.userName, email:formState.email})
  })
  alert(`You have been signed up succesfuly!`)
  
}

const handlEnterClick = () =>{
  backHandler();
  handleSubmit();
}

return (
  <div className="form_page">
    <div className="top">
      <button className="back_btn" onClick={backHandler}>BACK</button>
      <h1>
        Fill out the form to sign up
      </h1>
    </div>
    <form>
      <lable name="eventName">
        Event: {eventName}
      </lable>
      <lable name="eventDate">
        Date: {eventDate}
      </lable>
      <div className="userName">
        Your Name:
        <input
          type="text"
          name="userNameField"
          value={formState.userName}
          onChange={handleChange}/>
      </div>
      <div className="email">
        Your Email:
        <input
          type="email"
          name="userEmailField"
          value={formState.email}
          onChange={handleChange}/>
      </div>
    </form>
    <button className="enter_btn" onClick={handlEnterClick}>ENTER</button>
  </div>
)

}