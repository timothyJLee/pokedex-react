
import React, { useEffect, useState } from "react";
import axios from "axios";

//import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

import femaleIcon from "../images/female.png";
import maleIcon from "../images/male.png";
import shinyIcon from "../images/shiny.png";
import pokeballIcon from "../images/pokeball.png";

import {
  Nav, NavContainer,
  NavLink, NavImg,
  CenterNav, RightNav,
  Pokecard,
  PokeImg,
} from "./NavbarStyledElements";

function Navbar(props) {
  const [input, setInput] = useState("");
  const [pokeNames, setPokeNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validateMsg, setValidateMsg] = useState("Enter PokéName or No.");
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100000`);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementsByClassName("box")[0].blur();
      // Set inner text of input box to pokemon name
    }, 1200);
    return () => clearTimeout(timer);
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (isValid(e.target.value)) {
      props.setUserInput(e.target.value);
    } else {
    }
  };

  const isValid = (input) => {
    if (!loading) {
      const numRegEx = /^[0-9]+$/;
      const alphaRegEx = /^[a-zA-Z]+$/;
      if (input.match(numRegEx)){
        if (input <= pokeNames.count && input > 0) {
          return true;
        } else{
          //Set validation msg, "Input number 1 - pokeNames.count"
        }
      }      
    if (input.match(alphaRegEx)) {
      for (let i = 0; i < pokeNames.count; i++) {
        if (input === pokeNames.results[i].name) {
          return true;
        }
      }
      // Set validation msg, "Input proper Pokemon name..."
    }
    return false;
  };}

  const showSidebar = () => setSidebar(!sidebar);
  const typelist = props.pokemon.types.map(type => <li>{type.type.name}</li>);
  const abilitylist = props.pokemon.abilities.map(ability => <li>{ability.ability.name}</li>);
  const stats = props.pokemon.stats.map(stats => <tr> <th>{stats.stat.name}: </th> <th>{stats.base_stat}</th> </tr>);
  const moves = props.pokemon.moves.map(moves => <tr> <th>{moves.move.name}: </th> </tr>);

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

        <div className="container">
          <input
            className="box"
            type="text"
            value={input}
            onChange={handleInput}
          />
        </div>
      </NavContainer>

      <Pokecard>
        <PokeImg src={props.pokemon.sprites['front_default']} alt=""/>
        <p>{props.species.genera[7].genus}</p>
        
        <ul>
          <p>Type: </p>
          {typelist}</ul>
        <ul>
          <p>Ht/Wt: </p>
          <li><span>Height: </span>{props.pokemon.height / 10}<span>m</span></li>
          <li><span>Weight: </span>{props.pokemon.weight / 10}<span>kg</span></li>
        </ul>
        <p>{props.species.flavor_text_entries[0].flavor_text}</p>
        <ul>
          <p>Abilities: </p>
          {abilitylist}
        </ul>
        <table>
          {stats}
        </table>
        <table>
          {moves}
        </table>
      </Pokecard>
    </>
  );
}

export default Navbar;