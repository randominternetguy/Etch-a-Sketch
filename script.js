const body = document.querySelector("body");
const gridSizeButton = document.querySelector("#change-grid");
let gridSize = 16;

// return random RGB values.
let setRandomRGB = () => {
  let rgbvalues = [];
  for (let i = 0; i <= 2; i++){
    rgbvalues.push(Math.floor(Math.random() * Math.floor(256)));
  }
  // return the array with comma separated RGB values
  return rgbvalues.toString();
}

// creates a {gridSize}x{gridSize} grid.
let createGrid = (size) => {
  // if there is a grid container remove it.
  if (document.querySelector("#grid-container")){
    body.removeChild(document.querySelector("#grid-container"));
  }

  const container = document.createElement('div');
  container.setAttribute('id', 'grid-container');

  container.style.cssText = `
  display: grid;
  grid-template-columns: repeat(${size}, 1fr);
  grid-template-rows: repeat(${size}, 1fr);
  `

  for (let i = 0; i <= size - 1; i++){
    for (let j = 0; j <= size - 1; j++){
      let grid = document.createElement('div');
      grid.classList.add('grid');
      grid.addEventListener("mouseover", () => {
        // background color changes to random color.
        grid.style.cssText = `
        background-color: rgb(${setRandomRGB()}) ;
      `
      });
      container.appendChild(grid);
    }
  }
  body.appendChild(container);
}

createGrid(gridSize);

// change the grid size when user clicks the gridSizeButton.
gridSizeButton.addEventListener('click', () => {
  gridSize = prompt('How many grids do you want the box to have?\n(Max size = 50)');
  if (gridSize <= 50){
    createGrid(gridSize);
  }
  else {
    alert('Please enter a number below 50');
  }
})