// Variables
const LOADING_GRID_COLOR = "#FFFFF";
const LOADING_COLOR = "black";
const LOADING_SIZE = 10;

let gridColor = LOADING_GRID_COLOR;
let gridSquareColor = LOADING_COLOR;
let gridSize = LOADING_SIZE;

// Get ElementById
const grid = document.getElementById('grid');
const gridSizeButton = document.getElementById('grid-size');
const resetButton = document.getElementById('reset-button');
const gridColorButton = document.getElementById('grid-color');
const backgroundColorButton = document.getElementById('grid-background-color');

// EventListners
gridSizeButton.addEventListener('click', gridResize);
resetButton.addEventListener('click', gridColorReset);
gridColorButton.addEventListener('input', (e) => gridSquareColor = e.target.value );
backgroundColorButton.addEventListener('input', backgroundColorChange);

//Functions
function colorChange(e) {  
    this.style.backgroundColor = gridSquareColor;
    this.id = 'color-changed';
    e.stopPropagation();
}

function gridCreation (size) {
    newGrid();
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.id = 'row';
        row.className = 'row';
        grid.appendChild(row);
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.id = 'grid-squares';
            div.className = 'grid-squares';
            row.appendChild(div);
        }
    } 
    let gridSquares = document.querySelectorAll('div.grid-squares');
    gridSquares.forEach(div => div.addEventListener('mouseover', colorChange));
}

function newGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

function gridColorReset() {
    let gridSquares = document.querySelectorAll('div.grid-squares');
    gridSquares.forEach(div => div.style.backgroundColor = "rgb(255, 255, 255)");
}

function gridResize () {
    let size = prompt("Please Enter Size of Grid less than 100");
    gridCreation(size);
}

function backgroundColorChange(e) {
    gridColor = e.target.value;
    let gridSquares = document.querySelectorAll('div#grid-squares');
    gridSquares.forEach(div => div.style.backgroundColor = gridColor);
}

window.onload = () => {
    gridCreation(LOADING_SIZE);
}