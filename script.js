const container = document.querySelector('#container');


function createDiv() {
    const squareDivs = document.createElement('div');
    container.append(squareDivs);
}

for (let i = 0; i < 256; i++) {
    createDiv();
}