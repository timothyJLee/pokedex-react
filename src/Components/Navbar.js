
import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

import femaleIcon from "./images/female.png";
import maleIcon from "./images/male.png";
import shinyIcon from "./images/shiny.png";

function Navbar(props) {
  return (
    <nav className="Nav-header">
      <div>
        <ul>
          <li>No. {props.number}32</li>
          <li className="topnav-center">{props.name}</li>
          <div className="topnav-right">
            <li>
              <img src={femaleIcon} />
            </li>
            <li>
              <img src={maleIcon} />
            </li>
            <li>
              <img src={shinyIcon} />
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg" />
            </li>
            <Link to="/">ALL POKÉMON</Link>
          </div>
        </ul>
      </div>
    </nav>
  );}

export default Navbar;