// import aboutImage from "./about.jpg";

function aboutLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "About";

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
  const lowerLeftText = document.createElement("ul");
  lowerLeftText.classList = "grid-content-text";
  const line1 = document.createElement("li");
  line1.textContent = "Monday - Wednesday / 12 - 9pm";
  line1.classList = "grid-content-text";
  lowerLeftText.appendChild(line1);
  const line2 = document.createElement("li");
  line2.textContent = "Thursday / 10am - 10pm";
  line2.classList = "grid-content-text";
  lowerLeftText.appendChild(line2);
  const line3 = document.createElement("li");
  line3.textContent = "Friday - Saturday / 10am - late";
  line3.classList = "grid-content-text";
  lowerLeftText.appendChild(line3);
  const line4 = document.createElement("li");
  line4.textContent = "Sunday / 11am - 6pm";
  line4.classList = "grid-content-text";
  lowerLeftText.appendChild(line4);

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Customer comments";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `"The grime band were a shock, frankly. But you can't go wrong with the food and excellent service!"`;
  const lowerRightText2 = document.createElement("p");
  lowerRightText2.classList = "grid-content-text";
  lowerRightText2.textContent = `"I had 18 pints and listened to some beats whilst eating steak. 10/10"`;
  const lowerRightText3 = document.createElement("p");
  lowerRightText3.classList = "grid-content-text";
  lowerRightText3.textContent = `"Solid bait, can't say any more than that"`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);
  lowerRightContent.appendChild(lowerRightText2);
  lowerRightContent.appendChild(lowerRightText3);

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

export { aboutLoad };
