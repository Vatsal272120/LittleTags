import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MobileIcon } from "./Styles";
import styled from "styled-components";
import { Lock } from "@styled-icons/material";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import "./headerstyles.css";

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderMid,
  HeaderRight,
  User,
  HeaderIcons,
  Cart,
  Search,
} from "./Styles";
import { Link } from "react-router-dom";
import SearchBar from "./../SearchBar/Search";

const Header = () => {
  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    console.log("search");
    setshowSearch(!showSearch);
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <MenuIcon style={{ color: "black" }} style={{ fontSize: 30 }} />
      </HeaderLeft>
      <HeaderMid>
        <Link to='/'>
          {" "}
          <img
            className='header__logo'
            src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
            alt=''
          />{" "}
        </Link>
      </HeaderMid>
      <HeaderRight>
        <Link to='/account'>
          <User style={{ color: "black" }} />
        </Link>

        <Link>
          <Search onClick={toggle} style={{ color: "black" }} />
        </Link>

        <Link to='/account'>
          <Cart style={{ color: "black" }} />
        </Link>
      </HeaderRight>
      {showSearch ? <SearchBar /> : null}
    </HeaderWrapper>
  );
};

export default Header;
