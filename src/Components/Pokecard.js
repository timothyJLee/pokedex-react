
/*
- Pass pokeNames as prop from Navbar
- 

*/

function Pokecard(props) {
  return (
    <Pokecard>
        <img src={props.pokemon.sprites['front_default']} alt=""/>
    </Pokecard>
  );
}

export default Pokecard; 
