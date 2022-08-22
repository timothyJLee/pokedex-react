
import React from "react";
import Pokedex from "pokedex-promise-v2";


class Pokemon extends React.Component {
    constructor(props){
        super(props);


    }
  const P = new Pokedex();

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

  componentDidMount() {
  }

  componentWillUnmount() {
  }



 render() {
    return 
  }
}