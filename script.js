const grid = document.getElementById('grid');

userInput = ''

function gridCreation (userInput) {
    let numberSquares = userInput**2
    for (let i = 0; i < numberSquares; i++) {
        const div = document.createElement('div');
        div.id = '';
        div.className = 'grid-squares';
        grid.appendChild(div);
    }
}