import React from "react";
import { SideDrawerWrapper, DrawerHeader } from "./Styles";
import CloseIcon from "@material-ui/icons/Close";

const SideDrawer = ({ toggleSiderBar, showSiderBar }) => {
  return (
    <SideDrawerWrapper>
      <CloseIcon onClick={toggleSiderBar} />
      <DrawerHeader></DrawerHeader>
    </SideDrawerWrapper>
  );
};

export default SideDrawer;
