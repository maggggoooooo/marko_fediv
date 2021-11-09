import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import SwitchRoute from "./SwitchRoute";

ReactDOM.render(
  <BrowserRouter>
    <SwitchRoute />
  </BrowserRouter>,
  document.getElementById("root")
);
