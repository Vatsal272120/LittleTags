import React, { useState } from "react";
import { Options, MenuButton } from "./SideDrawerOptionStyles";
import AddIcon from "@material-ui/icons/Add";

const SideDrawerOptions = ({ name }) => {
  const [showList, setshowList] = useState(false);

  const openList = () => {
    setshowList(!showList);
  };

  return (
    <Options>
      <MenuButton onClick={openList}>
        {name}
        <span>
          <AddIcon style={{ fontSize: 30 }} />
        </span>
      </MenuButton>
    </Options>
  );
};

export default SideDrawerOptions;
