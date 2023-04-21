import React from "react";
import ReactDOM from "react-dom/client";
//import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";


if (process.env.NODE_ENV === 'development') {
  console.log("Check Dev: ", process.env.NODE_ENV, process.env.API_KEY);
  console.log(process.env);
}
else if (process.env.NODE_ENV === 'production'){
  console.log("Check Prod: ", process.env.NODE_ENV, process.env.API_KEY);
  console.log(process.env);
}
else console.log("Error");

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
