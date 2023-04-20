import "./myStyles.scss";

const user: string = "Miguel Ortiz";
console.log(`Hello ${user}!`);

const div: HTMLDivElement = document.createElement("div");
div.id = "red-background";
div.textContent = user;
div.style.color = "white";
document.body.append(div);

const div2: HTMLDivElement = document.createElement("div");
div2.id = "green-background";
div2.textContent = user;
div2.style.color = "white";
document.body.append(div2);
