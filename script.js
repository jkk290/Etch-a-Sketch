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
        return(getSquares());
    } else if (Number.isNaN(numberSquares)) {
        alert("Error: Please enter a number");
        return(getSquares());
    } else if ((numberSquares <= 0) || (numberSquares > 100)) {
        alert("Error: Enter a number between 1 - 100");
        return(getSquares()); 
    }
    createGrid(); 
     
};

function createDiv() {
    const squareDiv = document.createElement('div');
    squareDiv.style.flexBasis = 100 / squares + '%';
    squareDiv.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'green';
    });
    container.append(squareDiv);
}

function createGrid() {
    for (let i = 0; i < squares * squares; i++) {
        createDiv();
    }
};

