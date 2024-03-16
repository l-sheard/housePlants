import "./App.css";
import React from "react";
import { LoginForm } from "./components/login";
import { Navbar } from "./components/nav";


function App() {
  return (
    <div className="App bg-darkGreen">
      <Navbar />
      <header className="App-header">
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
