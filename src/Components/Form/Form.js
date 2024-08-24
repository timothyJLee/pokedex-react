import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import "./Form.css";

function Form({setUserInput, pokeNames }) {
    const [inputs, setInputs] = useState("");

    useEffect(() => {  //timer
        const timer = setTimeout(() => {
          document.getElementsByClassName("box")[0].blur();
          // Set inner text of input box to inputs
         // document.getElementById("boxValue").setAttribute("value", inputs);
        }, 1200);
        return () => clearTimeout(timer);
      }, [inputs]);
    
      const handleInput = (e) => {
        setInputs(e.target.value);  //change to set timer
        //document.getElementById("boxValue").setAttribute("value", inputs);

        if (isValid(e.target.value)) {
          //setUserInput(e.target.value);
          console.log("hello" + inputs)
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

      return(
        <div className="container">
<form>
<input
key={nanoid()}
id="boxValue"
autoFocus="autoFocus"
  className="box"
  type="text"
  value={inputs}
  onChange={handleInput}
/>
</form>
</div>
      );
    
}

export default Form;