import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";

import { Container, Logo, Background, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, restProps }) => {
  return bg ? <Background>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return <ButtonLink>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};
export default Header;
