const content = document.getElementById("content");

const menu = document.createElement("h1");
const title = document.createElement("h3");
const item = document.createElement("h5");
const desc = document.createElement("p");
const div = document.createElement("div");

// TODO: make heading
content.appendChild(menu);
menu.classList.add("menu-heading");

// TODO: make main course section of menu
content.appendChild(div);
div.classList.add("menu-card");

content.appendChild(title);
title.classList.add("section-title");


content.appendChild(item);
item.classList.add("item");

content.appendChild(desc);
desc.classList.add("desc");




// TODO: make sides section of menu


// TODO: make toppings section of menu