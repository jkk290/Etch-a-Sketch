const body = document.querySelector('body');
const container = document.querySelector('#container');
const getSquaresBtn = document.createElement('button');

let squares = 0;

getSquaresBtn.addEventListener('click', getSquares);
getSquaresBtn.textContent = "Generate grid";
body.prepend(getSquaresBtn);

function getSquares() {
    squares = prompt("Enter the number of squares per side.", "Number should be 100 or less.");
    let numberSquares = Number(squares);
    if (squares === null) {
        return;
    } else if (squares === "") {
        alert("Error: Must enter a number");
        return getSquares();
    } else if (Number.isNaN(numberSquares)) {
        alert("Error: Please enter a number");
        return getSquares();
    } else if ((numberSquares <= 0) || (numberSquares > 100)) {
        alert("Error: Enter a number between 1 - 100");
        return getSquares(); 
    }

    container.innerHTML = '';
    createGrid(); 
     
};

function createDiv() {
    
    const squareDiv = document.createElement('div');
    squareDiv.style.flexBasis = 100 / squares + '%';
    squareDiv.dataset.opacity = "0";
    squareDiv.addEventListener('mouseenter', (event) => {
        let currentOpacity = squareDiv.dataset.opacity;
        let updatedOpacity = Number(currentOpacity) + 0.1;
        event.target.style.backgroundColor = randomRgb();
        if (updatedOpacity <= 1) {
            squareDiv.dataset.opacity = updatedOpacity;
            event.target.style.opacity = updatedOpacity;
        }
    });
    container.append(squareDiv);
}

function createGrid() {
    for (let i = 0; i < squares * squares; i++) {
        createDiv();
    }
};

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

