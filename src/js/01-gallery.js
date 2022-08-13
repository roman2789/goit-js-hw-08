// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');

const galleryItemsRef = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src= '${item.preview}'
      data-source='${item.original}'
      alt="${item.description}"
    />
  </a>`;
  })
  .join('');

gallery.innerHTML += galleryItemsRef;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

// console.log(galleryItems);
