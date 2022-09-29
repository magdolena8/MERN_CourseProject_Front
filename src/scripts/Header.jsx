import React, {useState} from "react";

import Title from '../media/Title_V4.svg'
import telegramIcon from '../media/telegram.svg'
import BurgerButton from './components/BurgerButton.jsx'

import "../styles/Header.css"

function Header({handleMain, handleHistory, handleAboutUs}) {

  const [burgerStatus,
    setBurgerStatus] = useState(false);

  const handleBurgerClick = () => {
    setBurgerStatus(!burgerStatus)
  }

  function Menu() {
    return (
      <div className={burgerStatus
        ? 'menu active'
        : 'menu'}>
        <div className='menu__content'>
          <ol>
            <li
              onClick={function () {
              handleMain();
              handleBurgerClick()
            }}>main</li>
            <li
              onClick={function () {
              handleHistory();
              handleBurgerClick()
            }}>our history</li>
            <li
              onClick={function () {
              handleAboutUs();
              handleBurgerClick()
            }}>about us</li>
          </ol>
        </div>
        <div className='blur' onClick={() => setBurgerStatus(false)}/>
      </div>

    )
  }

  return (
    <div className="Header">
      <Menu/>

      <BurgerButton f={handleBurgerClick}/>
      <img className="Title" onClick={handleMain} src={Title} alt={Title}/>
      <a href="https://t-do.ru/magdolena8" target="_blank">
        <img
          className="telegramBtn"
          src={telegramIcon}
          alt={telegramIcon}/>
      </a>
    </div>
  )

}

export default Header;