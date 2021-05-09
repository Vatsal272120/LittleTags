import React, { useState } from "react";

import {
  HeaderWrapper,
  HeaderTop,
  HeaderBottom,
  HeaderLeft,
  HeaderRight,
  User,
  Search,
  Cart,
} from "./Styles";

import { Link, useHistory } from "react-router-dom";
import Navbar from "../../Navbar/Index";
import SearchBar from "../../SearchBar/Index";

const HeaderLarge = () => {
  const history = useHistory();

  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    console.log("search");
    setshowSearch(!showSearch);
  };

  return (
    <HeaderWrapper>
      <HeaderTop>
        <HeaderLeft>
          <h1 className='header__Logo'>
            {" "}
            <Link to='/'>
              <img
                className='header__Logo__Image'
                src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
                alt=''
              />
            </Link>
          </h1>
        </HeaderLeft>
        <HeaderRight>
          <Link to='/account'>
            <User style={{ color: "black" }} />
          </Link>
          <Link>
            <Search onClick={toggle} style={{ color: "black" }} />
          </Link>

          <Link to='/cart'>
            <Cart style={{ color: "black" }} />
          </Link>
        </HeaderRight>
      </HeaderTop>
      <HeaderBottom></HeaderBottom>

      {showSearch ? <SearchBar /> : null}
    </HeaderWrapper>
  );
};

export default HeaderLarge;
