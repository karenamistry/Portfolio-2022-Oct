import React from "react";
import "./layout.css";
//components
import Header from "./components/header";
import Footer from "./components/footer";
import Cursor from "./components/customCursor";
import ScrollToTop from "./components/ScrollToTop";
//pages
import Landing from "./pages/landing";
import Work from "./pages/landing";
import Contact from "./pages/landing";
import Beacons from "./pages/beacons";
import Expedite from "./pages/expedite";
import Stocate from "./pages/stocate";

import { Route, Routes } from "react-router-dom";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

  html{
    font-size: 16.5px;
    font-size: 17px;
    font-weight: 400;
    color: #120B2E;
    -webkit-font-smoothing: antialiased;

    cursor: none;
    a{
      cursor: alias;
    }
}
  body{
    font-family: Arial, Helvetica, sans-serif;
    font-family: "Albert Sans", sans-serif;
}
`;

const light = {
  darkDark: "#120B2E",
  dark: "#3D4E66",
  mid: "#898799",
  light: "#CAC9D1",
  lightLight: "#F7F7FC",
};

function Layout() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <ScrollToTop />
        <Cursor></Cursor>
        <Header></Header>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Beacons" element={<Beacons />} />
        <Route path="/Expedite" element={<Expedite />} />
        <Route path="/Stocate" element={<Stocate />} />
      </Routes>
    </>
  );
}

export default Layout;

// Dependencies:
//   Router Dom
//   Styled Components
//   Framer Motion

// Put in when you have pages: add the page <Beacons></Beacons> in each route

// <Routes>
//  <Route path="/">
//    <Beacons></Beacons>
// </Route>
//  <Route path="/Work"></Route>
//  <Route path="/About"></Route>
//  <Route path="/Contact"></Route>
//  </Routes>
