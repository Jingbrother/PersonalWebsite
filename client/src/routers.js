import React from "react";
import { Route, IndexRedirect } from "react-router";
import Find from './pages/Find/index'
export default (
  <Route>
    <Route path="/">
      <IndexRedirect to="/Find" />
      <Route path="/Find" component={Find} />
    </Route>
  </Route>
);
