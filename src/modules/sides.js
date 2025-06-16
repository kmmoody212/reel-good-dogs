export class Sides {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

const fries = new Sides("French Fries", 4);
const onionRings = new Sides("Onion Rings", 4);
const chips = new Sides("Homemade Chips", 4);
const fruit = new Sides("Fruit Cup", 3);

let sideDishes = [fries, onionRings, chips, fruit];

export function loadSides() {
    const menu = document.getElementById("menu-page");
    const title = document.createElement("h3");
    const div = document.createElement("div");

    menu.appendChild(div);
    div.classList.add("sides");

    div.appendChild(title);
    title.classList.add("sides-heading");
    title.textContent = "Sides";

    sideDishes.forEach(side => {
        const lineItem = document.createElement("div");
        const item = document.createElement("p");
        const price = document.createElement("p");
    // create a new div to contain the name and price and give it a class
        div.appendChild(lineItem);
        lineItem.classList.add("sides-line");
    // append the item and price elements to the new div
        lineItem.appendChild(item);
        lineItem.appendChild(price);
    // add class names to the sides and prices
        item.classList.add("side-name");
        price.classList.add("side-price");
    // set the text content for the item and price
        item.textContent = side.name;
        price.textContent = side.cost;
        
    })

    
    

}