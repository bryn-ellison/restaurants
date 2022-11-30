import "./style.css";

function home() {
  const test = document.createElement("div");
  test.textContent = "HELLO WORLD";
  test.id = "test-div";

  return test;
}

document.body.appendChild(home());
