
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
      <div class="topnav-center">
        <p>{props.name}</p>
      </div>

      <div class="topnav-left">
        <img className="pokeball-img" src={pokeballIcon} />
        <p>No. {props.number}722</p>
      </div>

      <div className="topnav-right">
        <div >
          <img className="circleBase circle2" src={femaleIcon} />
        </div>
        <div>
          <img className="circleBase circle1" src={maleIcon} />
        </div>

        <div>
          <img src={shinyIcon} />
        </div>

        <div>
          <Link to="/">ALL POKÉMON</Link>
        </div>
      </div>
    </div>
  );}

export default Navbar;