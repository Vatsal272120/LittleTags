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
} from "../Login/LoginStyles";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {};

  return (
    <LoginWrapper>
      <LoginSection>
        <LoginContainer>
          {" "}
          <LoginPageContent>
            <LoginForm>
              <LoginFormHeader>
                <h1 className='formTitle'>Register</h1>
                <p className='formLegend'>
                  Please fill in the information below
                </p>
              </LoginFormHeader>
              <LoginFormItem>
                <input
                  type='text'
                  className='formInput'
                  placeholder='Frist Name'
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>
              <LoginFormItem>
                <input
                  type='text'
                  className='formInput'
                  placeholder='Last Name'
                  autofocus
                  required
                />
                <label className='floatingLabel'>Email</label>
              </LoginFormItem>
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
              <LoginSubmit onClick={register}>Create my Account</LoginSubmit>
              <LoginSocials>Link socials will go here</LoginSocials>
            </LoginForm>
          </LoginPageContent>
        </LoginContainer>
      </LoginSection>
    </LoginWrapper>
  );
};

export default Register;
