import { BrowserRouter as Router } from "react-router-dom";
//import Pokedex from "pokedex-promise-v2";
import Navbar from "./components/Navbar/Navbar";
//import Pokemon from "./components/Pokemon";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App(props) {
  const [pokemon, setPokemon] = useState([]);
  const [userInput, setUserInput] = useState("bulbasaur");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

let id = 1;
  useEffect(() => {
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

  return (
    <div className="App">
      <Router>
        {!loading && <Navbar pokemon={pokemon} setUserInput={setUserInput} />}
       </Router>
    </div>
  );
}

export default App;
