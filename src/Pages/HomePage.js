import React, { useState } from "react";
import SideBar from "./../Components/SideBar/index";
import Navbar from "./../Components/Navbar/index";
import Login from "../Components/Login/Login";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Login /> */}
    </>
  );
};

export default HomePage;
