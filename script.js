
const grid = document.getElementById('grid');

function colorChange(e) {  
    this.style.backgroundColor = "black";
    e.stopPropagation();
}

function gridCreation () {
    resetGrid();
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

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

}

const gridSizeButton = document.getElementById('grid-size');
gridSizeButton.addEventListener('click', gridCreation);
