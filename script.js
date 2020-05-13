const container = document.querySelector("#grid-container");
let gridSize = 16;

container.style.cssText = `
  display: grid;
  grid-template-columns: repeat(${gridSize}, 1fr);
  grid-template-rows: repeat(${gridSize}, 1fr);
`

// return random RGB values.
let setRandomRGB = () => {
  let rgbvalues = [];
  for (let i = 0; i <= 2; i++){
    rgbvalues.push(Math.floor(Math.random() * Math.floor(256)));
  }
  // return the array with comma separated RGB values
  return rgbvalues.toString();
}

// create a {gridSize}x{gridSize} grid.
let createGrid = (size) => {
  for (let i = 0; i <= size - 1; i++){
    for (let j = 0; j <= size - 1; j++){
      let grid = document.createElement('div');
      grid.classList.add('grid');
      grid.addEventListener("mouseover", () => {
        grid.style.cssText = `
        background-color: rgb(${setRandomRGB()});
      `
      });
      container.appendChild(grid);
    }
  }
}

createGrid(gridSize);