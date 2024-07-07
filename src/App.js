import { BrowserRouter as Router } from "react-router-dom";
//import Pokedex from "pokedex-promise-v2";
import Navbar from "./Components/Navbar/Navbar";
//import Pokemon from "./components/Pokemon";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Pokecard from "./Components/Pokecard";

function App(props) {
  const [pokemon, setPokemon] = useState([]);
  const [species, setSpecies] = useState([]);
  const [userInput, setUserInput] = useState("bulbasaur");
  const [loading, setLoading] = useState(true);
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

  return (
    <div className="App">
      <Router>
        {!loading ? (
        <>
        <Navbar pokemon={pokemon} species={species} setUserInput={setUserInput} />
        </>) : <p>loading</p>}
       </Router>
    </div>
  );
}

export default App;
