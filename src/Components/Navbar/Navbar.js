
import React, { useEffect, useState } from "react";
import axios from "axios";

import { nanoid } from 'nanoid';

//import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
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
  const [pokeNames, setPokeNames] = useState([]);
  const [typeNames, setTypeNames] = useState([]);
  const [strWk, setStrWk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeLoading, setTypeLoading] = useState(true);
  const [strWkLoading, setstrWkLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validateMsg, setValidateMsg] = useState("Enter PokéName or No.");
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {  //get pokenames
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

  useEffect(() => {  //get type names
    setTypeLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(
        `https://pokeapi.co/api/v2/type?limit=100000`);
        setTypeNames(await response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTypeNames(null);
        console.log("The error is " + error);
      } finally {
        setTypeLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {  //get strength/weak data
    setstrWkLoading(true);
    const getData = async () => {
      try {
        let strWkUnique = [];
        for (let types of props.pokemon.types){
          const response =  await axios.get(types.type.url);
          strWkUnique.push(await response.data)
          setError(null);
        }
        setStrWk(strWkUnique);
      } catch (err) {
        setError(err.message);
        setStrWk(null);
        console.log("The error is " + error);
      } finally {
        setstrWkLoading(false);
      }
    };
    getData();
  }, []);
  
  function typeWeaknessTableBuild() {
    if(!strWkLoading){
      let typeWeaknessTable = {};
      if(!typeLoading){
        typeNames.results.forEach(type => {
          typeWeaknessTable[type.name] = 1;
        })
      }

      strWk.forEach(strwk => {
        for(const [key,value] of Object.entries(strwk.damage_relations)) {
          switch(key) {
            case "double_damage_from" :{
              value.forEach(dd => {
                typeWeaknessTable[dd.name] *= 2;
              });
            }
              break;
            case "half_damage_from" :{
              value.forEach(hd => {
                typeWeaknessTable[hd.name] *= .5;
              });
            }
              break;
            case "no_damage_from" : {
              value.forEach(nd => {
                typeWeaknessTable[nd.name] = 0;
              });
            }
              break;
              default:
            }
          }
        })

        let tpwk = { x4 : [],x2 : [],x : [],x5 : [],x25 : [],x0 : []}
        for(const [key,value] of Object.entries(typeWeaknessTable)) {
          if(value == 4) tpwk.x4.push(key);
          if(value == 2) tpwk.x2.push(key);
          if(value == 1) tpwk.x.push(key);
          if(value == .5) tpwk.x5.push(key);
          if(value == .25) tpwk.x25.push(key);
          if(value == 0) tpwk.x0.push(key);   
        }

        let tpwktbJSX = 
          <>
      <table>
        <tbody>
    <tr><th>4xWeak:</th>{ tpwk.x4.map(x4 => <th key={nanoid()}>{x4}</th>) }</tr>
    <tr><th>2xWeak:</th>{ tpwk.x2.map(x2 => <th key={nanoid()}>{x2}</th>) }</tr>
    <tr><th>.5xWeak:</th>{ tpwk.x5.map(x5 => <th key={nanoid()}>{x5}</th>) }</tr>
    <tr><th>.25xWeak:</th>{ tpwk.x25.map(x25 => <th key={nanoid()}>{x25}</th>) }</tr>
    <tr><th>NoEffect:</th>{ tpwk.x0.map(x0 => <th key={nanoid()}>{x0}</th>) }</tr>
    </tbody>
  </table>
          </>
      return tpwktbJSX;
    }
  }

  const showSidebar = () => setSidebar(!sidebar);

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
        {!loading ? (<Form key={nanoid()} setUserInput={props.setUserInput} pokeNames={pokeNames} />): <p>loading...</p>}

      </NavContainer>

      <Pokecard>
        <PokeImg src={props.pokemon.sprites['front_default']} alt=""/>
        <p>{props.species.genera[7].genus}</p>
        
        <ul>
          <p>Type: </p>
          {props.pokemon.types.map(type => <li key={nanoid()}>{type.type.name}</li>)}</ul>
        <ul>
          <p>Ht/Wt: </p>
          <li key={nanoid()}><span>Height: </span>{props.pokemon.height / 10}<span>m</span></li>
          <li key={nanoid()}><span>Weight: </span>{props.pokemon.weight / 10}<span>kg</span></li>
        </ul>
        <p>{props.species.flavor_text_entries[0].flavor_text}</p>
        <ul>
          <p>Abilities: </p>
          {props.pokemon.abilities.map(ability => <li key={nanoid()}>{ability.ability.name}</li>)}
        </ul>
        <table>
          <tbody>
          <tr><th>Base Stats:</th></tr>
          {props.pokemon.stats.map(stats => <tr key={nanoid()}><th>{stats.stat.name}: </th><th>{stats.base_stat}</th></tr>)}
          </tbody>
        </table>
        <table>
          <tbody>
          <tr><th>Moves:</th></tr>
          {props.pokemon.moves.map(moves => <tr key={nanoid()}><th>{moves.move.name}: </th></tr>)}
          </tbody>
        </table>
        <table>
          <tbody>
          <tr><th>Strengths and Weaknesses:</th></tr>
      <tr key={nanoid()}><th></th>{props.pokemon.types.map(types => <th key={nanoid()}>{types.type.name}</th>)}</tr>
      </tbody>
    </table> 
    {!strWkLoading ? typeWeaknessTableBuild() : <p>loading...</p>}
      </Pokecard>    
    </>
  );
}

export default Navbar;
