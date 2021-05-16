const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameOutputEl.textContent = nameInputEl.value;
    
    if(nameInputEl.value === '')
        nameOutputEl.textContent += 'незнакомец';
}