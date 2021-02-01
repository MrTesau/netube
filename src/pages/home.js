import React from "react";
import FooterContainer from "../containers/footer";
import Accordian from "../containers/accordian";
import JumboContainer from "../containers/jumbo";
import HeaderContainer from "../containers/header";

const Home = () => {
  return (
    <HeaderContainer>
      <JumboContainer />
      <Accordian />
      <FooterContainer />
    </HeaderContainer>
  );
};

export default Home;
