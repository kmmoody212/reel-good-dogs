import { renderHeading } from "./modules/home";
import { renderContainer, createCard } from "./modules/card";
import  { default as hotdogs } from "../assets/hotdogs-600x443.jpg";
import "./styles.css";

renderHeading();
renderContainer();
createCard(hotdogs, "100% all beef hotdogs!")