// Creating content on the "home" page

const content = document.getElementById("content");

export function renderHeading() {
    const heading = document.createElement("h1");
    const div = document.createElement("div");
    const div2 = document.createElement("div");

    // child of #content && container for h1 and div2
    div.classList.add("headline"); 
    content.appendChild(div);

    // >>>>> h1 child of .headline div 
    div.appendChild(heading); 
    heading.textContent = "Our hotdogs are 'reel' good!";

    // >>>>> div child of .headline div
    div2.textContent = "OPENING SOON!";
    div.appendChild(div2); 
}

