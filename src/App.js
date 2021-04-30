import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./Components/SideBar/index";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
