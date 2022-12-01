import { aboutLoad } from "./about";

function pageLoad(aboutLoad) {
  const pageContainer = document.createElement("div");
  pageContainer.id = "page-container";

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
  const contactBtn = document.createElement("button");
  contactBtn.classList = "menu-button";
  contactBtn.textContent = "CONTACT";
  const menuBtn = document.createElement("button");
  menuBtn.classList = "menu-button";
  menuBtn.textContent = "MENU";
  header.appendChild(logoMenuContainer);
  logoMenuContainer.appendChild(logo);
  logoMenuContainer.appendChild(aboutBtn);
  logoMenuContainer.appendChild(contactBtn);
  logoMenuContainer.appendChild(menuBtn);

  // Main content

  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  //mainContent.appendChild(aboutLoad(mainContent));
  //console.log(aboutLoad());

  // Footer content

  const footer = document.createElement("div");
  footer.id = "footer";
  const footerContainer = document.createElement("div");
  footerContainer.id = "footer-container";
  const credit = document.createElement("a");
  credit.href = "https://www.pexels.com/@evonics/";
  credit.textContent = "Background image copyright Marcus Herzberg";
  const copyright = document.createElement("a");
  copyright.href = "https://github.com/bryn-ellison";
  copyright.textContent = `Copyright ${new Date().getFullYear()} Bryn Ellison`;
  footerContainer.appendChild(credit);
  footerContainer.appendChild(copyright);
  footer.appendChild(footerContainer);

  // Append page elements to container

  pageContainer.appendChild(header);

  pageContainer.appendChild(mainContent);

  pageContainer.appendChild(footer);

  return pageContainer;
}

export { pageLoad };
