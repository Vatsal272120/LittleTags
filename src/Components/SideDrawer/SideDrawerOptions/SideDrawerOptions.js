import React, { useState } from "react";
import { Options, MenuButton } from "./SideDrawerOptionStyles";
import AddIcon from "@material-ui/icons/Add";
import MenuList from "./../DrawerMenuList/MenuList";

const SideDrawerOptions = ({ name, urlMen, urlWomen }) => {
  const [showList, setshowList] = useState(false);

  const openList = () => {
    setshowList(!showList);
  };

  return (
    <Options>
      <MenuButton onClick={openList}>
        {name}
        <span>
          <AddIcon style={{ fontSize: 80 }} />
        </span>
      </MenuButton>
      {showList ? <MenuList urlMen={urlMen} urlWomen={urlWomen} /> : null}
    </Options>
  );
};

export default SideDrawerOptions;
