import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

import AccountLogin from "./Pages/AccountLogin";
import AccountRegister from "./Pages/AccountRegister";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <AccountRegister />
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
