
import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

import femaleIcon from "./images/female.png";
import maleIcon from "./images/male.png";
import shinyIcon from "./images/shiny.png";
import pokeballIcon from "./images/pokeball.png";

function Navbar(props) {
  return (
    <div className="topnav">

      <p className="topnav-center">{props.name}</p>

      <div >
        <img className="pokeball-img" src={pokeballIcon} />
        <p>No. {props.number}722</p>
      </div>

      <div className="topnav-right">
        <div className="circleBase circle2">
          <img className="gender-img" src={femaleIcon} />
        </div>
        <div className="circleBase circle1">
          <img className="gender-img" src={maleIcon} />
        </div>
        <img src={shinyIcon} />
        <Link to="/">ALL POKÉMON</Link>
      </div>
    </div>
  );}

export default Navbar;