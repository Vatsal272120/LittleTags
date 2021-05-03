import React from "react";
import Header from "../Components/Header/Header";
import SideDrawer from "../Components/SideDrawer/Index";

const HomePage = () => {
  /* const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); */

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Login /> */}{" "}
      <Header />
    </>
  );
};

export default HomePage;
