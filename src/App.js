import { BrowserRouter as Router } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Navbar from "./components/Navbar/Navbar";
import Pokemon from "./components/Pokemon";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App(props) {


  const [pokemon, setPokemon] = useState("null");
  const [pokeAbility, setPokeAbility] = useState("null");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

 // const P = new Pokedex();
 // P.getPokemonByName("pikachu") // with Promise
 // .then((response) => {
 //   console.log(response.abilities[1].ability.name);
   // setPokeAbility(response.abilities[1].ability.name);
    //setPokemon(response);
 // })
//  .catch((error) => {
//    console.log("There was an ERROR: ", error);
//  });

 // P.getPokemonsList().then((response) => {
 //   console.log(response.results);
 // });

useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  getData();
}, []);

  return (
    <div className="App">
      <Router>
        <Navbar name={"e"} />
      </Router>
    </div>
  );
}

export default App;
