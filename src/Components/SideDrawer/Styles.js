import styled from "styled-components";

export const SideDrawerWrapper = styled.div`
  max-height: 946px;
  height: 100%;
  background: white;
  color: #5c5c5c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: none;
  touch-action: manipulation;

  @media screen and (min-width: 641px) {
    width: 340px;
  }

  .MuiSvgIcon-root {
    fill: currentColor;
    vertical-align: middle;
    display: inline-block;
  }
`;

export const DrawerHeader = styled.div`
  @media screen and (min-width: 641px) {
    max-height: 80px;
    min-height: 60px;
  }
  height: 77px;
  background: inherit;
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  position: relative;
`;
