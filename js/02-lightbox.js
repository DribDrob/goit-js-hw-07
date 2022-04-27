import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML("beforeend", `${createGalleryMarkup (galleryItems)}`);

function createGalleryMarkup (galleryItems) {
    return galleryItems.map(image => `
<li><a class="gallery__item" href="${image.original}">
<img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></li>`).join("");}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', fadeSpeed: 250,});
