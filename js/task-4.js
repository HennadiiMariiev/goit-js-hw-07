let counterValue = 0;

const counterEl = document.querySelector('#value');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');

// ========= VARIANT 1 с двумя функциями-обработчиками =============
incrementButtonEl.addEventListener('click', onIncrementButtonClick);
decrementButtonEl.addEventListener('click', onDecrementButtonClick);

function onIncrementButtonClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

function onDecrementButtonClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

// ========= VARIANT 2 с одной функцией-обработчиком =============
// incrementButtonEl.addEventListener('click', onIncrementDecrementButtonClick);
// decrementButtonEl.addEventListener('click', onIncrementDecrementButtonClick);

// function onIncrementDecrementButtonClick(event) {
//     counterValue += event.target.textContent === '+1' 
//                 ? 1
//                 : -1;
//     counterEl.textContent = counterValue;
// }

