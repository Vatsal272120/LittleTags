import React from "react";
import { MegaMenuWrapper, MegaMenuInner, ListTypeTwo } from "./Styles";
import List from "./ListItem/Index";
import PushMenu from "./PushMenu/Index";
import { Link } from "react-router-dom";

const MegaMenu = ({ dropdown }) => {
  return (
    <MegaMenuWrapper onClick={dropdown}>
      <MegaMenuInner>
        <List url={`/men`} Gender={"He"} />
        <List url={`/women`} Gender={"She"} />
        <ListTypeTwo>
          <Link to='/misc' className='link'>
            Miscellaneous
          </Link>
        </ListTypeTwo>
        <PushMenu
          imageUrl={
            "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          Gender={"He"}
          url={"/men"}
        />
        <PushMenu
          imageUrl={
            "https://images.unsplash.com/photo-1607782599721-4a423a010b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          Gender={"She"}
          url={"/women"}
        />
      </MegaMenuInner>
    </MegaMenuWrapper>
  );
};

export default MegaMenu;
