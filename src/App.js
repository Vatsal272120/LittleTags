import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Responsive } from "./Utils/Responsive";
import { auth } from "./Utils/firebaseUtility";
import { useStateValue } from "./DataContext/StateProvider";
import ContactUs from "./Pages/ContactUs";
import Header from "./Components/Header/Index";
import Recover from "./Components/User/RecoverPassword/Index";
import AccountRegister from "./Pages/AccountRegister";
import AccountLogin from "./Pages/AccountLogin";
import HomePage from "./Pages/HomePage";
import HeaderLarge from "./Components/Header/Large/Index";
import Navbar from "./Components/Navbar/Index";
import SearchBar from "./Components/SearchBar/Index";
import AccountInfo from "./Components/User/AccountInfo/AccountInfo";

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
      <Responsive displayIn={["Laptop"]}>
        <>
          {" "}
          <HeaderLarge /> <Navbar />{" "}
        </>
      </Responsive>

      <Responsive displayIn={["Mobile"]}>
        <>
          <Header />
        </>
      </Responsive>

      <Responsive displayIn={["Tablet"]}>
        <>
          <Header />
        </>
      </Responsive>

      <Switch>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/restorepassword'>
          <Recover />
        </Route>
        <Route path='/register'>
          <AccountRegister />
        </Route>
        <Route path='/account/login'>
          <AccountLogin />
        </Route>
        <Route path='/account'>
          <AccountInfo />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
