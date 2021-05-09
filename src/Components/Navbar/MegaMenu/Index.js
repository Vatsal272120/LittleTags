import React from "react";
import { MegaMenuWrapper, MegaMenuInner } from "./Styles";
import List from "./../ListItem/Index";

const MegaMenu = () => {
  return (
    <MegaMenuWrapper>
      <MegaMenuInner>
        <List url={`/men`} Men={"Men"} />
        <List url={`/women`} Men={"Women"} />
      </MegaMenuInner>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
