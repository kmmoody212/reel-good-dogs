import { renderHeading } from "../modules/heading";
import { renderContainer, createCard } from "../modules/card";
import  { default as hotdogs } from "../../assets/hotdogs.jpg";



export function loadHomePage() {
    const container = document.createElement("div");
    const content = document.getElementById("content");
    const heading = renderHeading();
    const cardContainer = renderContainer();
    let card1 = createCard(hotdogs, "We sell 100% all-beef franks in a natural casing - for that perfect snap in every bite! ");
    let card2 = createCard(hotdogs, "All of our dogs are nestled in lightly toasted, buttery split-top buns.");
    let card3 = createCard(hotdogs, "Like your dog to look like a charcoal stick? Or maybe just a little warm? We will grill your dog to your desired doneness!");
    
    container.classList.add("home-container");
    content.replaceChildren(container);
    content.appendChild(container);
    container.appendChild(heading);
    container.appendChild(cardContainer);
    cardContainer.replaceChildren();
    cardContainer.appendChild(card1);
    cardContainer.appendChild(card2);
    cardContainer.appendChild(card3);

return container;
}