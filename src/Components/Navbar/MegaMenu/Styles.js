import styled from "styled-components";

export const MegaMenuWrapper = styled.div`
  margin-top: 15px;
  position: absolute;
  max-height: calc(100vh - 123px);
  opacity: 1;
  position: absolute;
  padding: 20px 0;
  width: 100%;
  left: 0;
  overflow: auto;
  overscroll-behavior: contain;
  text-align: left;
  background: white;
  border-bottom: 1px solid #e7e7e7;
  transition: all 0.3s ease-in-out;
  display: block;
`;

export const MegaMenuInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: left;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
