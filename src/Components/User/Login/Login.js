import React, { useState } from "react";
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
import { auth } from "../../../Utils/firebaseUtility";
import { useStateValue } from "./../../../DataContext/StateProvider";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          dispatch({
            type: "SET_USER",
            user: userCredential,
          });
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>
              <LoginFormItem>
                <input
                  type='password'
                  className='formInput'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  required
                />
                <label className='floatingLabel'>Password</label>
              </LoginFormItem>
              <LoginSubmit onClick={signIn}>Login</LoginSubmit>
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
              <LoginSocials>
                <a
                  href='javascript:void(0)'
                  data-href='https://www.ndnapps.com/ndnapps/sociallogin/social-login/redirect/google?domain=amrapaliboutique.myshopify.com'
                  class='ndn-icon icon-google cl-google ndn-social-connect '
                  title='Google'></a>
              </LoginSocials>
            </LoginForm>
          </LoginPageContent>
        </LoginContainer>
      </LoginSection>
    </LoginWrapper>
  );
};

export default Login;
