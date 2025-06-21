const content = document.getElementById("content");
import { default as hdstand } from "../../assets/hdstand.jpg";
import { default as beach } from "../../assets/beach.jpg";

export function renderAboutPage() {
    const container = document.createElement("div");
    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");
    const topPara = document.createElement("p");
    const bottomPara = document.createElement("p");
    const topImage = document.createElement("img");
    const bottomImage = document.createElement("img");

    content.appendChild(container).classList.add('about-container')    
    container.appendChild(divOne).classList.add("about-div");
    divOne.appendChild(topPara).classList.add("about-p"); 
    divOne.appendChild(topImage).classList.add("about-img");
    
    container.appendChild(divTwo).classList.add("about-div");
    divTwo.appendChild(bottomImage).classList.add("about-img");
    divTwo.appendChild(bottomPara).classList.add("about-p");

    topPara.textContent = "'Reel Good Dogs' is a newly opened hotdog stand, ready to serve up delicious, new-england style, grilled hotdogs (and more!) to locals and visitors of Beaufort, NC. What started out as a craving for hotdogs while at the beach, has become a unique and creative food stand serving numerous beach-lovers day in and day out!";
    topImage.src = hdstand;
    bottomPara.textContent = "The owner of 'Reel Good Dogs' has always dreamt of owning their own food service company. " + "While at the beach, " + 
    "looking to satisfy their craving for a hotdog and failing to do so, the owner had an epiphany: this would be a great place to set up a hotdog stand! " +
    "The owner originally moved to NC from NH, where natural casing hotdogs are a must and split-top hotdog buns are the only option. So it was decided that this new england style of hotdogs would be shared among the warm, beachy sands of NC's coast. "
    bottomImage.src = beach;

    return container;
}