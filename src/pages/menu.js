import { entreeMenu } from "../modules/entrees";



export function loadMenu() {

const content = document.getElementById("content");
const menu = document.createElement("h1");
const div = document.createElement("div");

// Menu heading
content.appendChild(menu);
menu.classList.add("menu-heading");
menu.textContent = "MENU";

// div for entire menu minus heading - might want to make each section a grid
content.appendChild(div);
div.classList.add("menu");

// Append Entree menu section to the menu
const entreeCard = entreeMenu();
div.appendChild(entreeCard);



// TODO: make sides section of menu


// TODO: make toppings section of menu

}