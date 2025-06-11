import { renderHeading } from "./modules/home";
import { renderContainer, createCard } from "./modules/card";
import  { default as hotdogs } from "../assets/hotdogs.jpg";
import "./styles.css";


// all of this can go in home.js page
renderHeading();
renderContainer();
createCard(hotdogs, "We sell 100% all-beef franks in a natural casing - for that perfect snap in every bite! ")
createCard(hotdogs, "All of our dogs are nestled in lightly toasted, buttery split-top buns.")
createCard(hotdogs, "Like your dog to look like a charcoal stick? Or maybe just a little warm? We will grill your dog to your desired doneness!")

// on load show Home.js 

// onclick for buttons(tabs) clears the content section and replaces with corresponding page