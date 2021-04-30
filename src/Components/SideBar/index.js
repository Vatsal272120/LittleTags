import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SidebarLink,
  SideBtnWrapper,
  SideBarRoute,
  SideBarMenu,
} from "./SideBarElements";

import { SearchBox } from "../Navbar/NavbarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SidebarLink to='/about' onClick={toggle}>
              page
            </SidebarLink>
            <SidebarLink to='/page' onClick={toggle}>
              page
            </SidebarLink>
            <SidebarLink to='/page' onClick={toggle}>
              page
            </SidebarLink>
            <SidebarLink to='/page' onClick={toggle}>
              cake
            </SidebarLink>
          </SideBarMenu>
          <SideBtnWrapper>
            <SideBarRoute to='/signIn' onClick={toggle}>
              SignIn
            </SideBarRoute>
          </SideBtnWrapper>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
