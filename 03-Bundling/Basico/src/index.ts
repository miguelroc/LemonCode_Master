import "./myStyles.scss";
import "./miEstilo.scss";
import logoImg from "./content/logo_1.png";

//Style in the TS code
const texto: string = "hola mundo typescript";
console.log(`El texto es, ${texto}`);
//document.write(texto);    //inserta texto en index.html

//Adding image through TS code
const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

//Forma_1: Añadir texto a div id=red-background
const div: HTMLElement = document.getElementById("red-background");
div.textContent = texto;

//Forma_2: Añadir elemento HTML estilado en body index.html
const div2: HTMLDivElement = document.createElement("div");
div2.textContent = texto;
div2.style.backgroundColor = "blue";
div2.style.color = "white";
document.body.append(div2);
