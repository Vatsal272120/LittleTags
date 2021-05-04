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
            <SideDrawerOptions
              name='Shop'
              urlMen='/shop/all/men'
              urlWomen='/shop/all/women'
            />
            <SideDrawerOptions
              name='New Arrivals'
              urlMen='/shop/newarrivals/men'
              urlWomen='/shop/newarrivals/women'
            />
            <SideDrawerOptions
              name='Collections'
              urlMen='/shop/collections/men'
              urlWomen='/shop/collections/women'
            />
            <SideDrawerOptions
              name='BestSellers'
              urlMen='/shop/bestsellers/men'
              urlWomen='/shop/bestsellers/women'
            />
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
