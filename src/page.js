function pageLoad() {
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

  // Footer content

  const footer = document.createElement("div");
  footer.id = "footer";

  // Append page elements to container

  pageContainer.appendChild(header);

  pageContainer.appendChild(mainContent);

  pageContainer.appendChild(footer);

  return pageContainer;
}

export { pageLoad };
