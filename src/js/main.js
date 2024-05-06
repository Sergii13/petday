import "../scss/style.scss";
import "./files/script.js";
import * as Functions from "./files/functions.js";
import "./files/sliders.js";
import { MousePRLX } from "./libs/parallax-mouse.js";

import "virtual:svg-icons-register";
import { Parallax } from "./libs/parallax.js";

Functions.menuInit();

if (document.querySelectorAll("[data-prlx-parent]")) {
  new Parallax(document.querySelectorAll("[data-prlx-parent]"));
}

new MousePRLX({});
