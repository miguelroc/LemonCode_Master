import React from "react";
import ReactDOM from "react-dom/client";
//import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";

const rootElement: any = document.getElementById("root");
const root: any = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <HelloComponent />
  </div>
);

// const root = createRoot(document.getElementById("root"));  //Marca error
// root.render(
//   <div>
//     <HelloComponent />
//   </div>
// );
