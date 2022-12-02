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
  upperLeftTitle.textContent = "Small Plates";
  const upperLeftText = document.createElement("ul");
  upperLeftText.classList = "grid-content-text";
  const line1 = document.createElement("li");
  line1.textContent = "Fine breads and whipped beurre  -6";
  line1.classList = "grid-content-text";
  upperLeftText.appendChild(line1);
  const line2 = document.createElement("li");
  line2.textContent = "Chicken slouvaki with spiced salad  -8";
  line2.classList = "grid-content-text";
  upperLeftText.appendChild(line2);
  const line3 = document.createElement("li");
  line3.textContent = "Smoked paprika hummus  -7";
  line3.classList = "grid-content-text";
  upperLeftText.appendChild(line3);
  const line4 = document.createElement("li");
  line4.textContent = "Fillet steak lollipops  -10";
  line4.classList = "grid-content-text";
  upperLeftText.appendChild(line4);
  const line5 = document.createElement("li");
  line5.textContent = "Hot, salty fries -5";
  line5.classList = "grid-content-text";
  upperLeftText.appendChild(line5);

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);

  // Upper right content

  const upperRightContent = document.createElement("div");
  upperRightContent.classList = "grid-content";
  const upperRightTitle = document.createElement("h3");
  upperRightTitle.classList = "grid-content-title";
  upperRightTitle.textContent = "Large Plates";
  const upperRightText = document.createElement("ul");
  upperRightText.classList = "grid-content-text";
  const URline1 = document.createElement("li");
  URline1.textContent = "Grilled bream with pickled lemon  -14";
  URline1.classList = "grid-content-text";
  upperRightText.appendChild(URline1);
  const URline2 = document.createElement("li");
  URline2.textContent = "Rack of lamb with rosemary potatoes  -19";
  URline2.classList = "grid-content-text";
  upperRightText.appendChild(URline2);
  const URline3 = document.createElement("li");
  URline3.textContent = "Vegetable moussaka  -12";
  URline3.classList = "grid-content-text";
  upperRightText.appendChild(URline3);
  const URline4 = document.createElement("li");
  URline4.textContent = "Pinenut and feta tagliatelle  -11";
  URline4.classList = "grid-content-text";
  upperRightText.appendChild(URline4);

  upperRightContent.appendChild(upperRightTitle);
  upperRightContent.appendChild(upperRightText);

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Dessert";
  const lowerLeftText = document.createElement("ul");
  lowerLeftText.classList = "grid-content-text";
  const LLline1 = document.createElement("li");
  LLline1.textContent = "Shortbread, clotted cream and morello cherries -6";
  LLline1.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline1);
  const LLline2 = document.createElement("li");
  LLline2.textContent = "Ice cream sundae -7";
  LLline2.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline2);
  const LLline3 = document.createElement("li");
  LLline3.textContent = "Rasberry panacotta -6";
  LLline3.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline3);
  const LLline4 = document.createElement("li");
  LLline4.textContent = "Lime sorbet -5";
  LLline4.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline4);
  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Drinks";
  const lowerRightText = document.createElement("ul");
  lowerRightText.classList = "grid-content-text";
  const LRline1 = document.createElement("li");
  LRline1.textContent = "Old fashioned -9";
  LRline1.classList = "grid-content-text";
  lowerRightText.appendChild(LRline1);
  const LRline2 = document.createElement("li");
  LRline2.textContent = "Vodka soda with extra vodka -8";
  LRline2.classList = "grid-content-text";
  lowerRightText.appendChild(LRline2);
  const LRline3 = document.createElement("li");
  LRline3.textContent = "Glass of fizz -7";
  LRline3.classList = "grid-content-text";
  lowerRightText.appendChild(LRline3);
  const LRline4 = document.createElement("li");
  LRline4.textContent =
    "We have an extensive wine list, just ask when we see you";
  LRline4.classList = "grid-content-text";
  lowerRightText.appendChild(LRline4);

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(upperRightContent);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}

export { menuLoad };
