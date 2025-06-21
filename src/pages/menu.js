import { entreeMenu } from "../modules/entrees";
import { loadSides } from "../modules/sides";
import { loadToppings } from "../modules/toppings";


export function loadMenu() {

const content = document.getElementById("content");
const menu = document.createElement("h1");
const div = document.createElement("div");
const container = document.createElement("div");

content.appendChild(container).classList.add('menu-container');

// Menu heading
container.appendChild(menu);
menu.classList.add("menu-heading");
menu.textContent = "MENU";

// div for entire menu minus heading - might want to make each section a grid
container.appendChild(div);
div.setAttribute('id', 'menu-page');

// Append Entree menu section to the menu
const entreeCard = entreeMenu();
div.appendChild(entreeCard);

// Append Sides menu section to the menu
const sidesCard = loadSides();
div.appendChild(sidesCard);

// make toppings section of menu
const topsCard = loadToppings();
div.appendChild(topsCard);

return container;

}