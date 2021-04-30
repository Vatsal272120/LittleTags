import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export const Nav = styled.nav`
  height: 80px;
  background: white;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #5c5c5c;
  box-shadow: 0 -1px #e7e7e7 inset;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out

  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  } ;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: black;
  curson: pointer;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 4px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    curson: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  curson: pointer;

  &.active {
    border-bottom: 3px solid #pink;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #1bf71;
  white-space: nowrap;
  color: #010606;
  font-size: 16px;
  padding: 10px 22px;
  outline: none;
  border: none;
  curson: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #red;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    margin-right: 10px;
    border: none;
    outline: none;
    float: left;
    padding: 0;
    font-size: 12px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
  }

  &:hover {
    .input {
      width: 60vw;
      justify-content: center;
      height: 60px;
      position: absolute;
      font-size: 50px;
      z-index: 99;
    }
  }
`;

export const Icon = styled.div`
  align-items: center;
`;

export const CloseIcon = styled(BiSearch)`
  font-size: 1.3rem;
`;
