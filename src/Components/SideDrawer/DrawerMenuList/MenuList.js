import React from "react";
import {
  Collapsible__Inner,
  Collapsible__Content,
  Collapsible,
  Collapsible__Button,
  Collapsible__InnerTwo,
} from "./MenuListStyles";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const MenuList = ({ urlMen, urlWomen }) => {
  const history = useHistory();

  const redirectToMen = () => history.push(urlMen);

  const redirectToWomen = () => history.push(urlWomen);

  return (
    <Collapsible__Inner>
      <Collapsible__Content>
        <Collapsible>
          <Collapsible__Button onClick={redirectToMen}>
            Men
            <span>
              <AddIcon style={{ fontSize: 15 }} />
            </span>
          </Collapsible__Button>
          <Collapsible__InnerTwo></Collapsible__InnerTwo>
        </Collapsible>
      </Collapsible__Content>
      <Collapsible__Content>
        <Collapsible>
          <Collapsible__Button onClick={redirectToWomen}>
            Women
            <span>
              <AddIcon style={{ fontSize: 15 }} />
            </span>
          </Collapsible__Button>
          <Collapsible__InnerTwo></Collapsible__InnerTwo>
        </Collapsible>
      </Collapsible__Content>
    </Collapsible__Inner>
  );
};

export default MenuList;
