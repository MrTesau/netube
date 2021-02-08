import React from "react";
import HeaderContainer from "../containers/header";
import { Form } from "../components";

const SignUpPage = () => {
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignin = () => {};
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Placeholder Sign In </Form.Title>

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder=""
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
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
    </>
  );
};

export default SignUpPage;
