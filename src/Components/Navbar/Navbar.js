
import React, { useState } from 'react';

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
  const [input, setInput] = useState("");

  const handleMouseEnter = () => {};
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <NavContainer>
        <Nav>
          <NavLink
            to={
              props.pokemon.id.toString() + "/" + props.pokemon.name.toString()
            }
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
          <input
            type="text"
            value={input}
            onChange={handleInput}
            defaultValue="Enter Name or No."
          />
        </CenterNav>
      </NavContainer>
      <span><p>{input}</p></span>
    </>
  );   
  }

export default Navbar;