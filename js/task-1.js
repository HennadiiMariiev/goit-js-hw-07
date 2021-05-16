const categoriesEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesEl.children;

console.log(`В списке '${categoriesEl.id}' ${categoriesItemsEl.length} категории.`);

[...categoriesEl.children].forEach(li => {
    const categoryHeaderEl = li.querySelector('h2');
    const categoryListEl = li.querySelector('ul');
    
    console.log('Категория: ', categoryHeaderEl.textContent);
    console.log('Количество элементов: ', categoryListEl.children.length);
});