import React, { useState } from "react";
import { NavbarHorzizontalList, ListItem } from "./Styles.js";

import { Link, useHistory } from "react-router-dom";
import MegaMenu from "./MegaMenu/Index";
import DropDown from "./DropDown/Index";

const Navbar = () => {
  const [megaMenu, setMegaMenu] = useState(false);
  const [showNewArrivals, setshowNewArrivals] = useState(false);
  const [showCollections, setshowCollections] = useState(false);
  const [showBestSellers, setshowBestSellers] = useState(false);

  const dropdown = () => {
    setMegaMenu(!megaMenu);
    setshowNewArrivals(false);
    setshowCollections(false);
    setshowBestSellers(false);
  };

  const newArrivals = () => {
    setshowNewArrivals(!showNewArrivals);
    setMegaMenu(false);
    setshowCollections(false);
    setshowBestSellers(false);
  };

  const collections = () => {
    setshowCollections(!showCollections);
    setshowBestSellers(false);
    setshowNewArrivals(false);
    setMegaMenu(false);
  };

  const bestsellers = () => {
    setshowBestSellers(!showBestSellers);
    setshowNewArrivals(false);
    setshowCollections(false);
    setMegaMenu(false);
  };

  return (
    <NavbarHorzizontalList>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText' onClick={dropdown}>
            Shop
          </p>
          <span className='linkSpacer'></span>
          {megaMenu ? <MegaMenu dropdown={dropdown} /> : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText' onClick={newArrivals}>
            New Arrivals
          </p>
          <span className='linkSpacer'></span>
          {showNewArrivals ? <DropDown newArrivals={newArrivals} /> : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText' onClick={collections}>
            Collections
          </p>
          <span className='linkSpacer'></span>
          {showCollections ? <DropDown collections={collections} /> : null}
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/' className='navLink'>
          <p className='navLinkText' onClick={bestsellers}>
            BestSellers
          </p>
          <span className='linkSpacer'></span>
          {showBestSellers ? <DropDown bestsellers={bestsellers} /> : null}
        </Link>
      </ListItem>
    </NavbarHorzizontalList>
  );
};

export default Navbar;
