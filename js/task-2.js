const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('#ingredients');

  const ingredientsList = ingredients.map(item => {
      const listItemEl = document.createElement('li');
      listItemEl.textContent = item;
      return listItemEl;
  });

  ingredientsEl.append(...ingredientsList);
