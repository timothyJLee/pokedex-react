import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar name="person" />
      </Router>
    </div>
  );
}

export default App;
