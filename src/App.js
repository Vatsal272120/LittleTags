import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/new'>
          <h1>New</h1>
        </Route>
        <Route path='/account'>
          <UserPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
