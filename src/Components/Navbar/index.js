import React from "react";
import { FaBars, AiOutlineUser } from "react-icons/fa";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  SearchBox,
  Icon,
  CloseIcon,
  NavBtn,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>
            <img
              src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
              alt=''
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {" "}
            <FaBars />{" "}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='page'>page</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='page'>page</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='page'>page</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='page'>page</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='page'>page</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <SearchBox>
              <input className='input' type='search' placeholder='Search' />
              <Icon>
                {" "}
                <CloseIcon />{" "}
              </Icon>
            </SearchBox>
            <NavBtnLink to='signIn'>Sign In</NavBtnLink>
            <NavBtnLink to='cart'>Cart</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
