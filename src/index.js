import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cards from "./Components/Cards";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Cards />, document.getElementById("root"));

serviceWorker.unregister();
