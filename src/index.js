import { add } from "./calc.js";
import("./index.css");
import React from "react";
import ReactDom from "react-dom";
console.log(add(50, 3));

// const h1 = document.createElement("h1");
// h1.innerText = "Hello Webpack Let's Start";
// h1.classList.add("redcolor");
// document.getElementById("root").appendChild(h1);

ReactDom.render("Hello React", document.getElementById("root"));
