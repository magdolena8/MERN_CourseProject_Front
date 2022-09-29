import { useState } from 'react/cjs/react.development';
import '../../styles/Button.css'
// import styled from "styled-components";


function BurgerButton(props){

    const [sidebarStatus, setSidebarStatus] = useState(false);

    const handleClick = () =>{
        setSidebarStatus(!sidebarStatus)
        props.f(sidebarStatus)
    }



    return(
        <div className="button" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>

        </div>
    )
}





export default BurgerButton;