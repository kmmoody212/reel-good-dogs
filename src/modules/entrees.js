

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
    const sectionCard = document.createElement("div"); // container for entree section
    const content = document.getElementById("content");

    content.appendChild(sectionCard);
    sectionCard.classList.add("entree-card");

    title.textContent = "Choose Your 'Dog";
    title.classList.add("entree-heading");
    sectionCard.appendChild(title);

    hotdogs.forEach(hotdog => {
    // 1. Create a fresh div for this hotdog
    const div = document.createElement("div");

    // 2. Create item, price, and description elements
    const item = document.createElement("p");
    const price = document.createElement("p");
    const desc = document.createElement("p");

    // 3. Set text content
    item.textContent = hotdog.name;
    price.textContent = hotdog.cost;
    desc.textContent = hotdog.description;

    // 4. Add styling classes
    div.classList.add("entree");
    item.classList.add("entree-name");
    price.classList.add("entree-prices");
    desc.classList.add("entree-desc");

    // 5. Append item and price to the div
    div.appendChild(item);
    div.appendChild(price);
    

    // 6. Append the div and desc to the sectionCard
    sectionCard.appendChild(div);
    sectionCard.appendChild(desc);

    });

   return sectionCard;


}