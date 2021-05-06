import React, { useState } from "react";
import { auth } from "../../../Utils/firebaseUtility";
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
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {
    e.preventDefault();

    // register the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authenticatedUser) => {
        console.log(authenticatedUser);

        if (authenticatedUser) {
          history.push("/");
        }

        auth.signOut();
      })
      .catch((e) => alert(e.message));
  };

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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
