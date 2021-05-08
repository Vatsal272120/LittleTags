import styled from "styled-components";

export const Conatainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 641px) {
    padding: 0 54px;
  }
`;

export const ContainerHeader = styled.div`
  position: relative;

  display: block;
  box-sizing: border-box !important;
  -webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  --window-height: 946px;
  --header-height: 77px;
  --header-is-not-transparent: 1;

  @media screen and (min-width: 641px) {
    padding: 50px 0;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  text-align: center;
  font-family: Futura, sans-serif;
  font-weight: 200;
  display: block;
  font-style: normal;
  color: #5c5c5c;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-transform: uppercase;

  .headerHeading {
    margin-top: 0 !important;
    margin-bottom: 0;
    font-family: Futura, sans-serif;
    font-weight: 200;
    display: block;
    font-style: normal;
    color: #5c5c5c;

    @media screen and (max-width: 640px) {
      margin-bottom: 10px;
    }

    @media screen and (min-width: 641px) {
      font-size: 22px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 0;
  max-width: 680px;
  margin: 50px auto;

    @media screen and (min-width: 641px) {
      margin-bottom: 80px
    }
  }
`;

export const ContentHeader = styled.div`
  position: relative;
  display: block;
  word-break: break-word;

  @media screen and (min-width: 641px) {
    margin: 50px 0;
  }
`;

export const ContentDetails = styled.div`
  margin-top: 0;
  max-width: 680px;
  margin: 35px auto;
  display: block;

  @media screen and (min-width: 641px) {
    margin: 80px;
  }

  .header {
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    word-break: break-word;
    line-height: 1.65;
    font-style: normal;
    color: #5c5c5c;
    font-family: "Century Gothic", sans-serif;

    .headerSpan {
      font-weight: 400;
      text-align: center;
      font-size: 15px;
      word-break: break-word;
      font-style: normal;
      color: #5c5c5c;
      font-family: "Century Gothic", sans-serif;
    }
  }

  .details {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 15px
    font-size: inherit;
    font-weight: inherit;
    display: block;
    font-style: normal;
    color: #5c5c5c;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;

  }

  .link {
    color: #323232;
    text-decoration: none;
    text-decoration-color: rgba(50, 50, 50, 0.6);
    text-underline-position: under;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    font-style: normal;
    line-height: 1.65;
  }
`;
