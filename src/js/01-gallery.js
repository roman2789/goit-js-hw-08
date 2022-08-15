// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems
  .map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src= '${preview}'
      data-source='${original}'
      alt="${description}"
    />
  </a>`;
  })
  .join('');

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
