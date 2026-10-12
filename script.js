import {dom,react} from "./runtime.js";
import {component as CoupleApp} from "./components.js";
dom.createRoot(document.getElementById("app")).render(react.createElement(CoupleApp));
