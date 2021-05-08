import styled from "styled-components";

import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const HeaderWrapperMain = styled.div`
  position: sticky;
  width: 100%;
  margin-top: 15px;
  top: 0;
  left: 0;
  z-index: 5;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  height: 123px;
`;

export const HeaderSection = styled.div`
  background: white;
  color: #5c5c5c;
  box-shadow: 0 -1px #e7e7e7 inset;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  --window-height: 947px;
  --announcement-bar-height: 40px;
  --header-height: 123px;
  --header-is-not-transparent: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  color: #5c5c5c;

  @media screen and (min-width: 1240px) {
    padding-bottom: 24px;
    padding: 18px 50px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const HeaderLeft = styled.div`
  flex: 1 0 0;
  align-items: center;
  display: flex;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  color: #5c5c5c;

  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }
`;

export const HeaderNav = styled.nav``;

export const HeaderMiddle = styled.div`
  display: flex;
  color: #5c5c5c;

  .header__Logo {
    margin-bottom: 0;
    position: relative;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .header__Logo__Image {
    margin: 0 auto;
    transition: opacity 0.3s ease-in-out;
    display: block;
    height: auto;
    border-style: none;
    vertical-align: top;
    width: 120px;

    @media screen and (min-width: 641px) {
      max-width: 100%;
    }
  }

  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }
`;

export const HeaderRight = styled.div`
  justify-content: flex-end;
  flex: 1 0 0;
  align-items: center;
  display: flex;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media screen and (min-width: 1240px) {
    margin-bottom: 40px;
  }
`;
