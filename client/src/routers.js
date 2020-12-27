import React from "react";
import { Route, IndexRedirect } from "react-router";
import Home from "./pages/home/index";
export default (
  <Route>
    <Route path="/">
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
    </Route>
  </Route>
);
