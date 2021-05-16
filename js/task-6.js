const symbolsInputEl = document.querySelector('#validation-input');
const SYMBOLS_COUNT = +symbolsInputEl.getAttribute('data-length');

symbolsInputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (symbolsInputEl.value.length !== SYMBOLS_COUNT) {
        symbolsInputEl.classList.contains('valid') 
            ? symbolsInputEl.classList.replace('valid', 'invalid')
            : symbolsInputEl.classList.add('invalid');
    }
    if(symbolsInputEl.value.length === SYMBOLS_COUNT) {
        symbolsInputEl.classList.contains('invalid')
            ? symbolsInputEl.classList.replace('invalid', 'valid')
            : symbolsInputEl.classList.add('valid');
    }
}