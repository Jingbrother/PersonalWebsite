import React from "react";
import { hot } from "react-hot-loader";
// import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { Router,browserHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import routers from "./routers";
import store from "./store/index";
import 'antd/dist/antd.css';
import './app.scss'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* <Router history={hashHistory} routes={routers} /> */}
          <Router history={browserHistory} routes={routers} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
