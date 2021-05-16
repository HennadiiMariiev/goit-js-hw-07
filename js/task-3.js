import images from './js/images.js'

const galleryEl = document.querySelector('#gallery');

const imagesList = images.map(img => {
    return `
    <li class="gallery__item"> 
        <img src="${img.url} alt="${img.alt}">
    </li>
    `
});

galleryEl.insertAdjacentHTML('afterbegin', imagesList.join(''));