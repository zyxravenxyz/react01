import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Game from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1> hello, world!</h1>);
const name = "raven";
const element1 = <h1>hello, {name}</h1>;
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Raven",
  lastName: "Li",
};
const element = <h1>Hello, {formatName(user)}</h1>;
reportWebVitals();
