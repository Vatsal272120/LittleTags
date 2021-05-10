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

function App() {
  const [{ user }, dispatch] = useStateValue();

  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 1240 ? true : false,
  });

  // for conditional rendering
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 1240px)");
    setMQuery(mediaQuery);

    // this is the cleanup function to remove the listener
    return () => setMQuery(false);
  }, []);

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
          <HeaderLarge /> <Navbar />
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
