import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

const Feature = ({ bg = true, children, restProps }) => {
  return <Container>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>;
};

export default Feature;
