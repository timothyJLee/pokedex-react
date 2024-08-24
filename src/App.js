import { BrowserRouter as Router } from "react-router-dom";
//import Pokedex from "pokedex-promise-v2";
import Navbar from "./Components/Navbar/Navbar";
//import Pokemon from "./components/Pokemon";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from 'nanoid';


import "./App.css";
import Pokecard from "./Components/Pokecard";

function App(props) {
  const [inputs, setInputs] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [species, setSpecies] = useState([]);
  const [pokeNames, setPokeNames] = useState([]);
  const [userInput, setUserInput] = useState("bulbasaur");
  const [loading, setLoading] = useState(true);
  const [loadingNames, setLoadingNames] = useState(true);
  const [error, setError] = useState(null);

let id = 1;
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${userInput}`
        );
        setPokemon(await response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
        console.log("The error is " + error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [userInput]);

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
        setLoadingNames(false);
      }
    };
    getData();
  }, []); 

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${userInput}`
        );
        setSpecies(await response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPokemon(null);
        console.log("The error is " + error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [userInput]);

  useEffect(() => {  //timer
    const timer = setTimeout(() => {
      document.getElementsByClassName("box")[0].blur();
      // Set inner text of input box to pokemon name
    }, 1200);
    return () => clearTimeout(timer);
  }, [inputs]);

  const handleInput = (e) => {
    setInputs(e.target.value);  //change to set timer
    if (isValid(e.target.value)) {
      setUserInput(e.target.value);
    } 
  };

  const isValid = (input) => {
    //if (!loading) {
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
   // }
    return false;
  };}

  return (
    <div className="App">
      
      <Router>
        {!loading ? (
        <>
        <Navbar key={nanoid()} pokemon={pokemon} species={species} setUserInput={setUserInput} userInput={userInput} />
        </>) : <p>loading</p>}
       </Router>
       
    </div>
  );
}

export default App;
