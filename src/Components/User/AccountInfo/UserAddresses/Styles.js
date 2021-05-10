import styled from "styled-components";

export const MainWrapper = styled.div`
  display: block;
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0 auto;
  display: block;

  @media screen and (min-width: 1240px) {
    padding: 0 80px;
  }
`;

export const PageHeader = styled.div`
  position: relative;
  display: block;

  @media screen and (min-width: 641px) {
    margin: 50px 0;
  }
`;
