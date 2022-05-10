import React from "../_snowpack/pkg/react.js";
import {HashRouter, Route, Routes} from "../_snowpack/pkg/react-router-dom.js";
import ReactGA from "../_snowpack/pkg/react-ga4.js";
import "./App.css.proxy.js";
import {Home} from "./Pages/index.js";
ReactGA.initialize([
  {
    trackingId: "G-T26WV973PB"
  }
]);
ReactGA.send("pageview");
const App = () => {
  return /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Home, null)
  })));
};
export default App;
