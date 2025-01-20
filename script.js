const container = document.querySelector('#container');

function createDiv() {
    const squareDiv = document.createElement('div');
    squareDiv.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'green';
    });
    container.append(squareDiv);
}

for (let i = 0; i < 256; i++) {
    createDiv();
}

