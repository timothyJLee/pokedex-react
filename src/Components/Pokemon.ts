
import { useEffect, useState } from "react";
import axios from "axios";


function Pokemon(props : any){

 const [pokemon, setPokemon] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const getData = async () => {
     try {
       let id = 1;
       const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${id}`
       );
       setPokemon(response.data);
       setError(null);
     } catch (err) {
      
       //setError(err.message);
       setPokemon(null);
       console.log("The error is " + error);
     } finally {
       setLoading(false);
     }
   };
   getData();
 }, [pokemon, error, loading]);


    return {

  }
}

export default Pokemon;