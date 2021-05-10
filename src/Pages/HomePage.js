import React from "react";

import SideDrawer from "../Components/SideDrawer/Index";
import Navbar from "./../Components/Navbar/Index";
import AccountInfo from "./../Components/User/AccountInfo/AccountInfo";

const HomePage = () => {
  /* const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); */

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Login /> */}{" "}
      <AccountInfo />
    </>
  );
};

export default HomePage;
