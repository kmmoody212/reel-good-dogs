import { renderHeading } from "./modules/heading";
import { renderContainer, createCard } from "./modules/card";
import { default as hotdogs } from "../assets/hotdogs.jpg";
import { renderAboutPage } from "./pages/about";
import { loadMenu } from "./pages/menu";
import { loadHours } from "./pages/hours";
import { loadHomePage } from "./pages/home";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();
});

const about = document.getElementById('about');
const menu = document.getElementById('menu');
const hours = document.getElementById('hours');
const contentDiv = document.getElementById('content');
const logo = document.getElementById('logo');


logo.addEventListener("click", function() {
    contentDiv.replaceChildren();
    return loadHomePage();
})

about.addEventListener("click", function() {
    return contentDiv.replaceChildren(renderAboutPage());
});

menu.addEventListener("click", function() {
    return contentDiv.replaceChildren(loadMenu());
})

hours.addEventListener("click", function() {
    return contentDiv.replaceChildren(loadHours());
});


