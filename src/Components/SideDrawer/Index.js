import React from "react";
import {
  SideDrawerWrapper,
  DrawerHeader,
  Empty,
  DrawerMain,
  DrawerContainer,
  DrawerMenu_Primary,
  DrawerMenu_Secondary,
  AfterEmpty,
  DrawerFooter,
  FooterBefore,
  Socials,
} from "./Styles";
import CloseIcon from "@material-ui/icons/Close";
import SideDrawerOptions from "./SideDrawerOptions/SideDrawerOptions";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import { Link, useHistory } from "react-router-dom";

const SideDrawer = ({ toggleSiderBar, showSiderBar }) => {
  const history = useHistory();

  const redirect = () => history.push("/account");
  return (
    <SideDrawerWrapper>
      <DrawerHeader>
        <CloseIcon onClick={toggleSiderBar} />
      </DrawerHeader>
      <Empty></Empty>
      <DrawerMain>
        <DrawerContainer>
          <DrawerMenu_Primary>
            <SideDrawerOptions name='Shop' />
            <SideDrawerOptions name='New Arrivals' />
            <SideDrawerOptions name='Collections' />
            <SideDrawerOptions name='BestSellers' />
            <SideDrawerOptions name='Shop' />
          </DrawerMenu_Primary>
          <DrawerMenu_Secondary>
            <ul className='linkList'>
              <li className='linkList__item'>
                <h3 className='account' onClick={redirect}>
                  Account
                </h3>
              </li>
            </ul>
          </DrawerMenu_Secondary>
          <AfterEmpty></AfterEmpty>
        </DrawerContainer>
      </DrawerMain>
    </SideDrawerWrapper>
  );
};

export default SideDrawer;
