
import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <p>No. {props.number}</p>
      <p>{props.name}</p>
      <p>MALE/FEMALEicon</p>
      <p>SHINYicon</p>
      <Link to="/">ALL POKÉMON</Link>
    </div>
  );}

export default Navbar;