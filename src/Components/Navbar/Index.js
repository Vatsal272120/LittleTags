import React, { useState } from "react";
import { NavbarHorzizontalList, ListItem } from "./Styles.js";

import { Link, useHistory } from "react-router-dom";
import MegaMenu from "./MegaMenu/Index";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <NavbarHorzizontalList>
      <ListItem>
        <Link to='/' className='navLink'>
          <p
            className='navLinkText'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Shop
          </p>
          <span className='linkSpacer'></span>
          {isShown && <MegaMenu />}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText'>New Arrivals</p>
          <span className='linkSpacer'></span>
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText'>Collections</p>
          <span className='linkSpacer'></span>
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText'>BestSellers</p>
          <span className='linkSpacer'></span>
        </Link>
      </ListItem>
    </NavbarHorzizontalList>
  );
};

export default Navbar;
