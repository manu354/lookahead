import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Planner from "./components/Planner";
import Header from "./components/Header/Header";
import ReactGA from "react-ga";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import LogRocket from "logrocket";

if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  LogRocket.init("ae9dbf/lookahead");
  ReactGA.initialize("UA-131760351-1", {
    debug: false
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log = () => {};
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
  }

  #root{
    height: 100%;
  }

  body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.bodyBg};
    font-family: "Karla", Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: ${props => props.theme.text};
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }

  h1 {
    font-size: 22px;
    font-family: "Quicksand", sans-serif;
  }
  /* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
} */
`;

export default () => {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Route path="/" exact component={Planner} />
      </Router>
    </ThemeProvider>
  );
};
