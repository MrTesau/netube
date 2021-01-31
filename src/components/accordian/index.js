import React from "react";

import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordian";

// Create Toggle Context -> No Prop Drilling here!
const ToggleContext = React.createContext();

const Accordian = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    // Provide Context for button Toggles
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordian.Header = function AccordianHeader({ children, ...restProps }) {
  // Grab Context
  const { toggle, setToggle } = React.useContext(ToggleContext);
  return (
    <Header onClick={() => setToggle(!toggle)} {...restProps}>
      {children}
      {toggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggle } = React.useContext(ToggleContext);
  // Instead of this:
  // return toggle ? <Body {...restProps}>{children}</Body> : null;
  // Dynamically adding classes to style Div if open or closed:
  return (
    <Body className={toggle ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
export default Accordian;
