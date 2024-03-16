import "./App.css";
import React from "react";
import { LoginForm } from "./components/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
