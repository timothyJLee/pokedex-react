import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar name="Rowlet" />
      </Router>
    </div>
  );
}

export default App;
