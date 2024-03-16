import "./App.css";
import React from "react";
import { Homepage } from "./pages/homepage";
import { LoginPage } from "./pages/login";
import { UploadPage } from "./pages/upload";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Homepage />
      break
    case "/loginPage":
      component = <LoginPage />
      break
    case "/upload":
      component = <UploadPage />
      break
  }

  return (

  );
}

export default App;
