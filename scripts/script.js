function createGrid(rows = 16) {
  const gridContainer = document.createElement("div");
  gridContainer.classList = "grid-container";

  const main = document.querySelector("main");
  main.appendChild(gridContainer);

  for (let size = rows; size > 0; size--) {
    let rowContainer = document.createElement("div");
    rowContainer.classList = "row-container";
    gridContainer.appendChild(rowContainer);

    for (let size2 = rows; size2 > 0; size2--) {
      let cell = document.createElement("div");
      cell.classList = "cell";
      cell.style.height = 480 / rows + "px";
      cell.style.width = 480 / rows + "px";
      rowContainer.appendChild(cell);
    }
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("transitionend", paintCell);
  });
}
function paintCell() {
  this.style.backgroundColor = "rgb(50, 50, 50)";
}

function sizePicker() {
  let sizes = prompt("Set size (max 100, default 16");
  let test = document.querySelector(".grid-container");
  test.remove();
  createGrid(sizes);
}

const titleH1 = document.querySelector("h1");
titleH1.addEventListener("click", sizePicker);

createGrid();
