import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { auth } from "./Utils/firebaseUtility";
import { useStateValue } from "./DataContext/StateProvider";
import ContactUs from "./Pages/ContactUs";
import Header from "./Components/Header/Index";
import Recover from "./Components/User/RecoverPassword/Index";
import AccountRegister from "./Pages/AccountRegister";
import AccountLogin from "./Pages/AccountLogin";
import HomePage from "./Pages/HomePage";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // to keep track of user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // add user to data layer on loggin in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // remove user from data layer on logging out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(user);

  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <ContactUs />
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
