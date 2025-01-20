const container = document.querySelector('#container');


function createDiv() {
    const squareDivs = document.createElement('div');
    squareDivs.textContent = 'Hello World';
    squareDivs.style.backgroundColor = 'gray';
    container.append(squareDivs);
}

for (let i = 0; i < 16; i++) {
    createDiv();
}