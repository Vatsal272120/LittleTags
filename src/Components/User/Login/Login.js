import React from "react";
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
} from "./LoginStyles";
import { useHistory, Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";

const Login = () => {
  const history = useHistory();

  const redirectToRegisterPage = () => history.push("/register");

  const redirectToRestorePassword = () => history.push("/restorepassword");

  return (
    <LoginWrapper>
      <LoginSection>
        <LoginContainer>
          {" "}
          <LoginPageContent>
            <LoginForm>
              <LoginFormHeader>
                <h1 className='formTitle'>Login</h1>
                <p className='formLegend'>
                  Please enter your email and password
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
              <LoginFormItem>
                <input
                  type='password'
                  className='formInput'
                  placeholder='Password'
                  required
                />
                <label className='floatingLabel'>Password</label>
              </LoginFormItem>
              <LoginSubmit>Login</LoginSubmit>
              <LoginHint>
                <span className='restore' onClick={redirectToRestorePassword}>
                  Click to reset password
                </span>
              </LoginHint>
              <LoginHint>
                <span className='text'>Don't have an account?</span>

                <span onClick={redirectToRegisterPage}>
                  <p className='linkToRegister'>Create one</p>
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

export default Login;
