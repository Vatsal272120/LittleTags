import React from "react";

import { useHistory } from "react-router-dom";
import {
  LoginWrapper,
  LoginSection,
  LoginContainer,
  LoginPageContent,
  LoginForm,
  LoginFormHeader,
  LoginFormItem,
  LoginSubmit,
  LoginHint,
  LoginSocials,
} from "./../Login/Styles";

const Recover = () => {
  const history = useHistory();
  const redirectToLoginPage = () => history.push("/account");

  return (
    <LoginWrapper>
      <LoginSection>
        <LoginContainer>
          {" "}
          <LoginPageContent>
            <LoginForm>
              <LoginFormHeader>
                <h1 className='formTitle'>Recover Password</h1>
                <p className='formLegend'>
                  Please enter your email to reset your password
                </p>
              </LoginFormHeader>
              <LoginFormItem>
                <input
                  type='email'
                  className='formInput'
                  placeholder='Email'
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>

              <LoginSubmit>Recover</LoginSubmit>
              <LoginHint>
                <span onClick={redirectToLoginPage} className='restore'>
                  Back to Login Page
                </span>
              </LoginHint>
              <LoginSocials></LoginSocials>
            </LoginForm>
          </LoginPageContent>
        </LoginContainer>
      </LoginSection>
    </LoginWrapper>
  );
};

export default Recover;
