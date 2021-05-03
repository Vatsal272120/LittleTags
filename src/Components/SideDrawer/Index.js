import React from "react";
import {
  SideDrawerWrapper,
  DrawerHeader,
  Empty,
  DrawerMain,
  DrawerContainer,
  DrawerMenu_Primary,
  DrawerMenu_Secondary,
  AfterEmpty,
  DrawerFooter,
} from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import SideDrawerOptions from "./SideDrawerOptions";

const SideDrawer = ({ toggleSiderBar, showSiderBar }) => {
  return (
    <SideDrawerWrapper>
      <DrawerHeader>
        <CloseIcon onClick={toggleSiderBar} />
      </DrawerHeader>
      <Empty></Empty>
      <DrawerMain>
        <DrawerContainer>
          <DrawerMenu_Primary>
            Primary Navigation
            <SideDrawerOptions />
          </DrawerMenu_Primary>
          <DrawerMenu_Secondary>Secondary Navigation</DrawerMenu_Secondary>
          <AfterEmpty>After empty</AfterEmpty>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContainer>
      </DrawerMain>
    </SideDrawerWrapper>
  );
};

export default SideDrawer;
