const refs = {
    renderButton: document.querySelector('[data-action="render"]'),
    destroyButton: document.querySelector('[data-action="destroy"]'),
    rangeInput: document.querySelector('#controls').querySelector('input'),
    boxesContainer: document.querySelector('#boxes'),
};

const arrayOfDivs = [];

refs.renderButton.addEventListener('click', onRenderButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);

function onRenderButtonClick() {
    if(refs.rangeInput.value > 0)
        createBoxes(refs.rangeInput.value);
}

function onDestroyButtonClick() {
    while(refs.boxesContainer.firstChild) {
        refs.boxesContainer.removeChild(refs.boxesContainer.lastChild);
    }

    arrayOfDivs.length = 0;
}

function createBoxes(amount) {
    for(let i = 0; i < amount; i += 1) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('style', generateInlineStyle(i));
        arrayOfDivs.push(newDiv);
    }

    refs.boxesContainer.append(...arrayOfDivs);
}

function generateColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function generateInlineStyle(i) {
    const SIZE = 30;
    return `
            background-color: ${generateColor()}; 
            width: ${SIZE + i * 10}px;
            height: ${SIZE + i * 10}px;
            margin: 5px;
            animation: 4s ease-out 0s infinite normal rotatediv;
            `;
}