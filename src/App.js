import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
