import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML("beforeend", `${createGalleryMarkup (galleryItems)}`);
galleryListEl.addEventListener('click', openOriginalImage);

function createGalleryMarkup (galleryItems) {
    return galleryItems.map(image => `
<div class="gallery__item"><a class="gallery__link" href="${image.original}">
<img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>
</div>`).join("");}

function openOriginalImage(e){
    e.preventDefault();
if (e.target.nodeName !=='IMG'){return;};
const ulrOriginalImage = e.target.dataset.source;
const instance = basicLightbox.create(`<img width="1400" height="900" src="${ulrOriginalImage}">`);
instance.show();
document.addEventListener("keydown", e => {
    if(e.code==='Escape'){
        instance.close();
    };
  });}