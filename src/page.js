import { menuClick } from "./index";

function headerLoad() {
  // Header content

  const header = document.createElement("div");
  header.id = "header";
  const logoMenuContainer = document.createElement("div");
  logoMenuContainer.id = "logo-menu-container";
  const logo = document.createElement("h1");
  logo.id = "logo";
  logo.textContent = "Flood";
  const aboutBtn = document.createElement("button");
  aboutBtn.classList = "menu-button";
  aboutBtn.textContent = "ABOUT";
  aboutBtn.autofocus;
  aboutBtn.addEventListener("click", () => {
    menuClick("about");
  });
  const contactBtn = document.createElement("button");
  contactBtn.classList = "menu-button";
  contactBtn.textContent = "CONTACT";
  contactBtn.addEventListener("click", () => {
    menuClick("contact");
  });
  const menuBtn = document.createElement("button");
  menuBtn.classList = "menu-button";
  menuBtn.textContent = "MENU";
  menuBtn.addEventListener("click", () => {
    menuClick("menu");
  });
  header.appendChild(logoMenuContainer);
  logoMenuContainer.appendChild(logo);
  logoMenuContainer.appendChild(aboutBtn);
  logoMenuContainer.appendChild(contactBtn);
  logoMenuContainer.appendChild(menuBtn);

  return header;
}

function mainLoad(currentTabContent) {
  // Main content

  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  mainContent.appendChild(currentTabContent(mainContent));

  return mainContent;
}

function footerLoad() {
  // Footer content

  const footer = document.createElement("div");
  footer.id = "footer";
  const footerContainer = document.createElement("div");
  footerContainer.id = "footer-container";
  const credit = document.createElement("a");
  credit.href = "https://www.pexels.com/@evonics/";
  credit.textContent = "Images copyright Marcus Herzberg";
  const copyright = document.createElement("a");
  copyright.href = "https://github.com/bryn-ellison";
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Bryn Ellison`;
  footerContainer.appendChild(credit);
  footerContainer.appendChild(copyright);
  footer.appendChild(footerContainer);

  return footer;
}
// Append page elements to container

export { headerLoad, mainLoad, footerLoad };
