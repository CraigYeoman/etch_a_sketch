userInput = '5'
const grid = document.getElementById('grid');
const gridSquares = document.querySelectorAll('div');

function colorChange(e) {
    
    this.style.backgroundColor = "black";
    e.stopPropagation();
    console.log(this);
    
}

gridSquares.forEach(div => div.addEventListener('click', colorChange, {
    capture: false
}));


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
}



