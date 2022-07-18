
import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="Nav-header">
      <ul>
        <li>No. {props.number}</li>
        <li>{props.name}</li>
        <li>MALE/FEMALEicon</li>
        <li>SHINYicon</li>
        <Link to="/">ALL POKÉMON</Link>
      </ul>
    </div>
  );}

export default Navbar;