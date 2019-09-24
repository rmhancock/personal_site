import React from "react";
import "./App.scss";
import Test from "./components/test";
import "../node_modules/augmented-ui/augmented.css";

function App() {
  return (
    <div className="App">
      <Test />
      <div className="parallax__cover"></div>
    </div>
  );
}

export default App;
