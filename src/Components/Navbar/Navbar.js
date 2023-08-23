
import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [pokeNames, setPokeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
   const getData = async () => {
     try {
       const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon?limit=100000`
       );
       setPokeNames(await response.data);
       setError(null);
     } catch (err) {
       setError(err.message);
       setPokeNames(null);
       console.log("The error is " + error);
     } finally {
       setLoading(false);
     }
   };
   getData();
 }, []); 

  const handleMouseEnter = () => {};
  const handleInput = (e) => {
    setInput(e.target.value);
    if (isValid(e.target.value)) {
      console.log("true, value is: " + e.target.value);
      props.setUserInput(e.target.value);
    } else {
      console.log("false, value is: " + e.target.value);
    }
  };

  const isValid = (input) => {
    if (!loading) {
      const numRegEx = /^[0-9]+$/;
      const alphaRegEx = /^[a-zA-Z]+$/;
      if (input.match(numRegEx) && (input <= pokeNames.count && input > 0)){
        return true;
      }
      if (input.match(alphaRegEx)) {
        pokeNames.results.forEach((result) => {
          console.log(typeof result);
          if (Object.values(result).includes(input)) {
            return true;
          }
        });
      }
    }
    return false;
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
          />
        </CenterNav>
      </NavContainer>
      <div>
        <p>{input}</p>
      </div>
    </>
  );
}

export default Navbar;