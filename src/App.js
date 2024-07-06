import logo from './logo.svg';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Routing from "./Routing.js";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
        <Routing/>
    </Router>
  );
}

export default App;
