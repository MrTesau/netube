import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./globalStyles";

ReactDOM.render(
  <>
    <GlobalStyles /> <App />{" "}
  </>,
  document.getElementById("root")
);
