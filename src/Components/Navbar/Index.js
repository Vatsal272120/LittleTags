import React, { useState } from "react";
import { NavbarHorzizontalList, ListItem } from "./Styles.js";

import { Link, useHistory } from "react-router-dom";
import MegaMenu from "./MegaMenu/Index";
import DropDown from "./DropDown/Index";

const Navbar = () => {
  const [megaMenu, setmegaMenu] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [showNewArrivals, setshowNewArrivals] = useState(false);
  const [showCollections, setshowCollections] = useState(false);
  const [showBestSellers, setshowBestSellers] = useState(false);

  return (
    <NavbarHorzizontalList>
      <ListItem>
        <Link to='/' className='navLink'>
          <p
            className='navLinkText'
            onMouseEnter={() => setmegaMenu(true)}
            onMouseLeave={() => setmegaMenu(false)}>
            Shop
          </p>
          <span className='linkSpacer'></span>
          <MegaMenu />
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p
            className='navLinkText'
            onMouseEnter={() => setshowNewArrivals(true)}
            onMouseLeave={() => setshowNewArrivals(false)}>
            New Arrivals
          </p>
          <span className='linkSpacer'></span>
          {showNewArrivals && <DropDown />}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p
            className='navLinkText'
            onMouseEnter={() => setshowCollections(true)}
            onMouseLeave={() => setshowCollections(false)}>
            Collections
          </p>
          <span className='linkSpacer'></span>
          {showCollections && <DropDown />}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p
            className='navLinkText'
            onMouseEnter={() => setshowBestSellers(true)}
            onMouseLeave={() => setshowBestSellers(false)}>
            BestSellers
          </p>
          <span className='linkSpacer'></span>
          {showBestSellers && <DropDown />}
        </Link>
      </ListItem>
    </NavbarHorzizontalList>
  );
};

export default Navbar;
