import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { App } from "./components/App";
// import store from "./store";

ReactDOM.render(
    // <App store={store} />,
    <App />,
    document.getElementById("root")
);