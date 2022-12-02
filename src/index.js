import { headerLoad, mainLoad, footerLoad } from "./page";
import { aboutLoad } from "./about";
import { contactLoad } from "./contact";
import { menuLoad } from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const pageContainer = document.createElement("div");
pageContainer.id = "page-container";
pageContainer.appendChild(headerLoad());
pageContainer.appendChild(mainLoad(aboutLoad));
pageContainer.appendChild(footerLoad());

content.appendChild(pageContainer);

function menuClick(page) {
  if (page === "about") {
    pageContainer.replaceChild(
      mainLoad(aboutLoad),
      pageContainer.childNodes[1]
    );
  } else if (page === "contact") {
    pageContainer.replaceChild(
      mainLoad(contactLoad),
      pageContainer.childNodes[1]
    );
  } else if (page === "menu") {
    pageContainer.replaceChild(mainLoad(menuLoad), pageContainer.childNodes[1]);
  }
}

export { menuClick };
