import React from "react";
import FooterContainer from "../containers/footer";
import Accordian from "../containers/accordian";
import JumboContainer from "../containers/jumbo";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components/";
import * as ROUTES from "../routes";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited Youtube videos, series and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Free for your pleasure.
          </Feature.SubTitle>
          <OptForm style={{ marginTop: "0rem" }}>
            <OptForm.Text>
              Browse my Youtube tastes in the original Netflix experience
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input
              placeholder={"This isnt the real Netflix, Go right on in."}
            />
            <OptForm.Button to={ROUTES.BROWSE}>Browse Youtube</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumboContainer />
      <Accordian />
      <FooterContainer />
    </>
  );
};

export default Home;
