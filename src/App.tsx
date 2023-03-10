import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <>
      <BrowserRouter>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
