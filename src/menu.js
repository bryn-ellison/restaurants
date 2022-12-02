function menuLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "Menu";

  titleContainer.appendChild(title);

  // Main content grid

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  // Upper left grid content

  const upperLeftContent = document.createElement("div");
  upperLeftContent.classList = "grid-content";
  const upperLeftTitle = document.createElement("h3");
  upperLeftTitle.classList = "grid-content-title";
  upperLeftTitle.textContent = "Welcome";
  const upperLeftText = document.createElement("p");
  upperLeftText.classList = "grid-content-text";
  upperLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);

  // Grid image content

  const image = document.createElement("img");
  image.id = "about-image";

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Opening hours";
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Comments";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(image);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}

export { menuLoad };
