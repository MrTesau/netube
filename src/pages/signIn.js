import React from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

const SignUpPage = () => {
  const handleSignin = () => {};
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>No Sign In Needed </Form.Title>

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input placeholder="" />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
            />
            <Form.Submit type="submit" data-testid="sign-in">
              Enter
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUpPage;
