import { pageLoad } from "./page";
import "./style.css";

const content = document.querySelector("#content");

content.appendChild(pageLoad());
