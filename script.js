userInput = '5'
const grid = document.getElementById('grid');

function colorChange(e) {  
    this.style.backgroundColor = "black";
    e.stopPropagation();
}

function gridCreation (userInput) {
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
    let gridSquares = document.querySelectorAll('div');
    gridSquares.forEach(div => div.addEventListener('click', colorChange));
}