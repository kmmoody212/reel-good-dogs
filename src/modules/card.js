// creates cards for "home" page

const content = document.getElementById("content");
const cardContainer = document.createElement("div");

export function renderContainer() {
    
    // cardContainer 2nd child of #content
    cardContainer.classList.add("card-container");
    return content.appendChild(cardContainer); 
}

export function createCard(imgPath, text) {
    // each card is a div containing an image and text
    const card = document.createElement("div");
    card.classList.add("card");

    // create and append image element
    const image = document.createElement("img");
    image.classList.add("card-img");
    image.src = imgPath;
    card.appendChild(image);

    // create and append p element
    const para = document.createElement("p");
    para.classList.add("card-text");
    para.textContent = text;
    card.appendChild(para);

    return cardContainer.appendChild(card);

}

