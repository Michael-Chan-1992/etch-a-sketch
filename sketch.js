const container = document.querySelector('.container');
const colorBtn = document.querySelector('button[data-mode="color"]')
const rainbowBtn = document.querySelector('button[data-mode="rainbow"]')
const resetBtn = document.querySelector('button[data-mode="reset"]')
container.addEventListener('mouseover', handleSquareHover);
resetBtn.addEventListener('click', reset);
colorBtn.addEventListener('click', toColorMode);
rainbowBtn.addEventListener('click', toRainbowMode);

let mode = 'color';

createGrid(getDimension());

function handleSquareHover(e){
  if (e.target.className === 'container') return 
  if (mode === 'rainbow') e.target.style.backgroundColor = `rgb(${genRandom255()},${genRandom255()},${genRandom255()})`;
  if (mode === 'color') e.target.style.backgroundColor = `rgb(0,0,0)`;
}

function getDimension(){
  const dimension = +prompt("Dimension? (max 100)", "16")
  return (dimension < 0 || dimension > 100) ? getDimension() : dimension
}

function reset(){
  const squares = container.querySelectorAll('.square')
  squares.forEach(square => square.remove());
  createGrid(getDimension());
}

function createGrid(size){
  for (let i = 0; i < size ** 2; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${640 / size}px`;
    container.appendChild(square);
  }
}

function genRandom255(){
  return Math.floor(Math.random() * 256)
}

function toColorMode(){
  mode = 'color';
  colorBtn.classList.add('active')
  rainbowBtn.classList.remove('active')
}

function toRainbowMode(){
  mode = 'rainbow';
  rainbowBtn.classList.add('active')
  colorBtn.classList.remove('active')
}