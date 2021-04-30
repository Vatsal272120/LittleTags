import React from "react";
import {
  LoginWrapper,
  LoginHeader,
  LoginInput,
  LoginButton,
} from "./LoginStyles";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginHeader>
        <h3>LOGIN OR SIGNUP</h3>
      </LoginHeader>
      <span className='details'>Please enter your email and password</span>
      <LoginInput>
        <input type='email' className='email' placeholder='email' />
        <input type='password' className='password' placeholder='password' />
      </LoginInput>
      <LoginButton>CONTINUE</LoginButton>
    </LoginWrapper>
  );
};

export default Login;
