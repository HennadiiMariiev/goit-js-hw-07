const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('input', onControlValueChange);

function onControlValueChange() {
    textEl.style.fontSize = controlEl.value + 'px';
}