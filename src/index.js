import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Game from "./App";
import reportWebVitals from "./reportWebVitals";

const testFunction = () => {
  return (
    <div>
      <button>大家好</button>
      <h1> Hello world</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(testFunction());

reportWebVitals();
