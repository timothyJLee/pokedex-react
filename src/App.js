import { BrowserRouter as Router } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import Navbar from "./components/Navbar/Navbar";
import Pokemon from "./components/Pokemon";

import "./App.css";

function App(props) {

  const P = new Pokedex();
  let pokemon;
  P.getPokemonByName("pikachu") // with Promise
  .then((response) => {
    console.log(response.abilities[1].ability.name);
    pokemon = response.abilities[1].ability.name;
  })
  .catch((error) => {
    console.log("There was an ERROR: ", error);
  });

  P.getPokemonsList().then((response) => {
    console.log(response.results);
  });

  

  return (
    <div className="App">
      <Router>
        <Pokemon />
        <Navbar name={"e"} />
      </Router>
    </div>
  );
}

export default App;
