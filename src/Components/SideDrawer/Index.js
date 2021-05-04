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
import { Link } from "react-router-dom";

const SideDrawer = ({ toggleSiderBar, showSiderBar }) => {
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
                <Link to='/account'>
                  <h3 className='account'>Account</h3>
                </Link>
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
