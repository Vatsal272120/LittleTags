import React from "react";
import Header from "../Components/Header/Header";
import HeaderLarge from "../Components/Header/HeaderLarge";
import SideDrawer from "../Components/SideDrawer/Index";

const HomePage = () => {
  /* const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); */

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Login /> */}{" "}
      <HeaderLarge />
    </>
  );
};

export default HomePage;
