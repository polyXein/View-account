import React from "react";
import { ReactDOM } from "react";
import '../styles/card.css'
import {NavLink, Link} from 'react-router-dom'

function Card({title, description, logo, state, setState, route}){

const changeState = () =>{
    setState(!state);
}

    return(
   <div className="container__card">

     <div className="container_logo">
              
        <button 
        onClick={changeState}
        className="logo_card">          
            <img src={logo} />
        </button>

     </div>
    <div>
        <NavLink className="nav_link" to="/viewaccount/personal-information" >
            <h2 className="title_card">
                {title}
            </h2>
       </NavLink>
        
    </div>
        <div className="">
        <p className="card_description">  
            {description}
        </p> 
    </div>

    </div>

    )
}
export default Card;