import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.scss";

import App from "./App";

ReactDOM.render(
  <Router>
    <App name="app" />
  </Router>,
  document.querySelector("#root")
);
