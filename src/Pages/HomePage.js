import React from "react";
import Header from "../Components/Header/Index";
import HeaderLarge from "../Components/Header/Large/Index";
import SideDrawer from "../Components/SideDrawer/Index";
import Navbar from "./../Components/Navbar/Index";

const HomePage = () => {
  /* const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); */

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Login /> */}{" "}
      <HeaderLarge />
      <Navbar />
    </>
  );
};

export default HomePage;
