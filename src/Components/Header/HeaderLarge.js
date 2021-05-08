import React, { useState } from "react";

import {
  HeaderWrapperMain,
  HeaderSection,
  HeaderWrapper,
  HeaderLeft,
  HeaderNav,
  HeaderMiddle,
  HeaderRight,
} from "./HeaderLargeStyles";
import SearchBar from "./../SearchBar/Search";
import { Link, useHistory } from "react-router-dom";

const HeaderLarge = () => {
  const history = useHistory();

  const [showSearch, setshowSearch] = useState(false);

  const toggle = () => {
    console.log("search");
    setshowSearch(!showSearch);
  };

  return (
    <HeaderWrapperMain>
      <HeaderSection>
        <HeaderWrapper>
          <HeaderLeft>
            <h4>Header Left</h4>
            <HeaderNav>
              <h5>Header Nav</h5>
            </HeaderNav>
          </HeaderLeft>
          <HeaderMiddle>
            <h1 className='header__Logo'>
              <Link to='/'>
                <img
                  className='header__Logo__Image'
                  src='https://cdn.shopify.com/s/files/1/0082/5091/6915/files/amrapali_logo_transpaper_bg_120x.png?v=1564667363'
                  alt=''
                />
              </Link>
            </h1>
          </HeaderMiddle>
          <HeaderRight>
            <h7>Header Right</h7>
          </HeaderRight>
        </HeaderWrapper>
      </HeaderSection>
    </HeaderWrapperMain>
  );
};

export default HeaderLarge;
