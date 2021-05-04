import styled from "styled-components";

export const LoginWrapper = styled.div``;

export const LoginSection = styled.div`
  display: block;
  box-sizing: border-box !important;
  webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  window-height: 937px;
  header-height: 77px;
  header-is-not-transparent: 1;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;
  @media screen and (min-width: 641px) {
    padding: 0 50px;
  }
`;

export const LoginPageContent = styled.div`
  margin: 35px auto;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  max-width: 400px;
  color: #5c5c5c;
  align-items: center;
  display: flex;
  line-height: 1.65;

  @media screen and (min-width: 641px) {
    min-height: calc(937px - 77px - 160px);
    margin-bottom: 80px;
    margin-top: 80px;
  } ;
`;

export const LoginForm = styled.form`
  display: block;
  width: 100%;
`;

export const LoginFormHeader = styled.header`
  margin-bottom: 24px;
  text-align: center;
  display: block;
  box-sizing: border-box !important;
  webkit-font-smoothing: antialiased;
  font-family: "Century Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #5c5c5c;
  line-height: 1.65;

  .formTitle {
    font-family: Futura, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #5c5c5c;
    transition: color 0.2s ease-in-out;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-top: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    line-height: 1.65;

    @media screen and (min-width: 641px) {
      font-size: 22px;
    }
  }

  .formLegend {
    margin-bottom: 0;
    margin-top: 0;
    font-size: inherit;
    font-weight: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    font-family: "Century Gothic", sans-serif;
    font-style: normal;
    color: #5c5c5c;
    line-height: 1.65;
  }
`;
