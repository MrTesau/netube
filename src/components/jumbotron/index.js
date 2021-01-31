import React from "react";
// Import Styled html 'Markup'
import {
  Inner,
  Container,
  Pane,
  SubTitle,
  Title,
  Image,
} from "./styles/jumbotron";

const Jumbotron = ({ children, direction = "row", ...restProps }) => {
  return <Inner direction={direction}>{children}</Inner>;
};

// When Called these create styled HTML Markup wrapping the Children:

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronContainer({ children, ...restProps }) {
  return <Image {...restProps} />;
};

export default Jumbotron;

// Jumbotron: lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
