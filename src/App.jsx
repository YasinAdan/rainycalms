import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";
import Nav from "./components/Nav";
import Main from "./components/Main";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
