import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

import AccountLogin from "./Pages/AccountLogin";
import AccountRegister from "./Pages/AccountRegister";
import Recover from "./Components/User/RecoverPassword/Recover";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cart'>
          <AccountRegister />
        </Route>
        <Route path='/restorepassword'>
          <Header />
          <Recover />
        </Route>
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
