import "./App.css";
import React from "react";
import { Homepage } from "./pages/homepage";
import { LoginPage } from "./pages/login";

function App() {
  return (
    <div className="App bg-darkGreen">
      <LoginPage />
    </div>
  );
}

export default App;
