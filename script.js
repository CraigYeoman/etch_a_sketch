const grid = document.getElementById('grid');


userInput = ''

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
    const mouseOver = document.getElementById('grid-squares');
    mouseOver.addEventListener("mouseover", mouseOver.style.color = 'black')
}



