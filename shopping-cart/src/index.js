import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./stylesheets/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Store from "./Store";
// The Provider is a special type of component.
// The Provider will wrap our App component along with a store that encapsulates
// local states within the App component.

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
