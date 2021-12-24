import { add } from "./calc.js";
import("./index.css");
import React from "react";
import ReactDom from "react-dom";
console.log(add(50, 3));

// const h1 = document.createElement("h1");
// h1.innerText = "Hello Webpack Let's Start";
// h1.classList.add("redcolor");
// document.getElementById("root").appendChild(h1);

// ReactDom.render("Hello React", document.getElementById("root"));
ReactDom.render(
  // React.createElement("h1", { className: "redcolor" }, [
  //   "Hello React ",

  //   React.createElement("b", null, "webpack"),
  // ]),
  <h1 className="redcolor">
    {""} Hello WebPack and <i>React</i>{" "}
  </h1>,
  document.getElementById("root")
);
