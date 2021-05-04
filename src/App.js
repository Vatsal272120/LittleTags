import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

import AccountLogin from "./Pages/AccountLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/new'>
          <h1>New</h1>
        </Route>
        <Route path='/register'>
          <AccountLogin />
        </Route>
        <Route path='/account'>
          <AccountLogin />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
