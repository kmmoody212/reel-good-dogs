

export class MenuItems {
    constructor(name, cost, description){
        this.name = name;
        this.cost = cost;
        this.description = description;
    }
}

const reelGood = new MenuItems("Reel Good Dog", 8, "Deetz & Wadson 100% all-beef frank in a natural casing.");
const landlubber = new MenuItems("The Landlubber", 7, "100% all-beef frank without the casing.");
const sebastian = new MenuItems("Sebastian", 9, "Deliciously seasoned and breaded crab cake mixture, shaped like a frank!");
const tunaDog = new MenuItems("Tuna Dog", 12, "Locally sourced tuna steaks, ground and shaped into a frank. For a 'reel' at-the-beach experience!");

let hotdogs = [reelGood, landlubber, sebastian, tunaDog];

export function entreeMenu() {
    const title = document.createElement("h3"); // the title of the section on the menu
    const item = document.createElement("p"); // name of item
    const price = document.createElement("p"); // price of item
    const desc = document.createElement("p"); // description of the item
    const sectionCard = document.createElement("div"); // container for entree section
    const div = document.createElement("div"); // contains item and price for easy styling
    const content = document.getElementById("content");
    
    content.appendChild(sectionCard);
    sectionCard.classList.add("entree-card");

    title.textContent = "Choose Your 'Dog";
    title.classList.add("entree-heading");
    sectionCard.appendChild(title);

    sectionCard.appendChild(div);
    div.classList.add("item-and-price");



}