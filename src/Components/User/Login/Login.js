import React from "react";
import {
  LoginWrapper,
  LoginSection,
  LoginContainer,
  LoginPageContent,
} from "./LoginStyles";

const Login = () => {
  return (
    <LoginWrapper>
      login wrapper
      <LoginSection>
        login section
        <LoginContainer>
          login container
          <LoginPageContent></LoginPageContent>
        </LoginContainer>
      </LoginSection>
    </LoginWrapper>
  );
};

export default Login;
