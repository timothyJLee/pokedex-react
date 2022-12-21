
import React from "react";
import Pokedex from "pokedex-promise-v2";


function Pokemon(props : any){

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


    return {
  }
}

export default Pokemon;