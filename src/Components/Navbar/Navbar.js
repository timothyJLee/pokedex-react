
import React from 'react';

//import "./Navbar.css";

import femaleIcon from "../images/female.png";
import maleIcon from "../images/male.png";
import shinyIcon from "../images/shiny.png";
import pokeballIcon from "../images/pokeball.png";

import {
  Nav, NavContainer,
  NavLink, NavImg,
  CenterNav, RightNav,
} from "./NavbarStyledElements";

function Navbar(props) {
  return (
    <>
      <NavContainer>
        <Nav>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()}
          >
            <NavImg src={pokeballIcon} alt="logo" />
          </NavLink>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
          >
            <span>No. {props.pokemon.id}</span>
          </NavLink>
        </Nav>

        <RightNav>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
          >
            <NavImg src={maleIcon} alt="logo" />
          </NavLink>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
          >
            <NavImg src={femaleIcon} alt="logo" />
          </NavLink>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
          >
            <NavImg src={shinyIcon} alt="logo" />
          </NavLink>
          <NavLink to="/all">
            <span>ALL POKEMON</span>
          </NavLink>
        </RightNav>

        <CenterNav>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
          >
            <span>{props.pokemon.name}</span>
          </NavLink>
        </CenterNav>
      </NavContainer>
    </>
  );   
  }

  /*  
  <div className="topnav">
      <div class="topnav-center">
        <p>{props.name}</p>
      </div>

        <img className="pokeball-img" src={pokeballIcon} />
        <p>No. {props.number}722</p>

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

          <CenterNav>
        <NavLink to="/name">Rowlett</NavLink>
      </CenterNav>
  */

export default Navbar;