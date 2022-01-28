// Get ElementById
const grid = document.getElementById('grid');
const gridSizeButton = document.getElementById('grid-size');
const resetButton = document.getElementById('reset-button');

// EventListners
gridSizeButton.addEventListener('click', gridCreation);
resetButton.addEventListener('click', gridColorReset);

//Functions
function colorChange(e) {  
    this.style.backgroundColor = "black";
    e.stopPropagation();
}

function gridCreation () {
    newGrid();
    let userInput = prompt("Please Enter Size of Grid less than 100");
    for (let i = 0; i < userInput; i++) {
        let row = document.createElement('div');
        row.id = 'row';
        row.className = 'row';
        grid.appendChild(row);
        for (let i = 0; i < userInput; i++) {
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
    gridSquares.forEach(div => div.style.backgroundColor = "black");
}
