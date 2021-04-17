import React from "react";
import { Route, IndexRedirect } from "react-router";
import Find from './pages/Find/index'
import Home from "./pages/home/index";
export default (
  <Route>
    <Route path="/">
      <IndexRedirect to="/Find" />
      <Route path="/Find" component={Find} />
      <Route path="/home" component={Home} />
    </Route>
  </Route>
);
