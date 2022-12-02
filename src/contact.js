function contactLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "Contact";

  titleContainer.appendChild(title);

  // Main content grid

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  // Upper left grid content

  const upperLeftContent = document.createElement("div");
  upperLeftContent.classList = "grid-content";
  const upperLeftTitle = document.createElement("h3");
  upperLeftTitle.classList = "grid-content-title";
  upperLeftTitle.textContent = "Get in touch";
  const upperLeftText = document.createElement("p");
  upperLeftText.classList = "grid-content-text";
  upperLeftText.textContent = `Give us a bell! We're very friendly.`;
  const upperLeftText2 = document.createElement("p");
  upperLeftText2.classList = "grid-content-text";
  upperLeftText2.textContent = `Phone: 0044 123 12346`;
  const upperLeftText3 = document.createElement("p");
  upperLeftText3.classList = "grid-content-text";
  upperLeftText3.textContent = `Email: bryn@floodrestaurant.co.uk`;

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);
  upperLeftContent.appendChild(upperLeftText2);
  upperLeftContent.appendChild(upperLeftText3);

  // Grid image content

  const image = document.createElement("img");
  image.id = "contact-image";

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Location";
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Or just come on down, we don't care!`;
  const lowerLeftText2 = document.createElement("p");
  lowerLeftText2.classList = "grid-content-text";
  lowerLeftText2.textContent = "123 Niceplace Street \r\n";
  lowerLeftText2.textContent += "Weston Supernice \r\n";
  lowerLeftText2.textContent += "SW99 7TD\r\n";
  lowerLeftText2.textContent += "United Kingdom";

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);
  lowerLeftContent.appendChild(lowerLeftText2);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Socials";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Twitter: @floodrestaurantUK`;
  const lowerRightText2 = document.createElement("p");
  lowerRightText2.classList = "grid-content-text";
  lowerRightText2.textContent = `Instagram: @floodUK`;
  const lowerRightText3 = document.createElement("p");
  lowerRightText3.classList = "grid-content-text";
  lowerRightText3.textContent = `Facebook: we don't use that rubbish`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);
  lowerRightContent.appendChild(lowerRightText2);
  lowerRightContent.appendChild(lowerRightText3);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(image);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}

export { contactLoad };
