import React from "react";
import { createRoot } from "react-dom/client";
import { Texto } from "./hola";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Ejercicio Opcional</h1>
    <Texto />
  </div>
);
