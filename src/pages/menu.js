import { entreeMenu } from "../modules/entrees";
import { loadSides } from "../modules/sides";



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
div.setAttribute('id', 'menu-page');

// Append Entree menu section to the menu
const entreeCard = entreeMenu();
div.appendChild(entreeCard);



// TODO: make sides section of menu
const sidesCard = loadSides();
div.appendChild(sidesCard);

// TODO: make toppings section of menu

}