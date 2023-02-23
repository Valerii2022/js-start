import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(HTMLImageElement.prototype);

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImagePreviewClick);

const imageMarkup = galleryItems
  .map(item => {
    return `
   <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      loading="lazy"
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      width = "375"
      height = "240"
    />
  </a>
</div>
   `;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

let modalCreate;

function onImagePreviewClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener('keyup', onEscapeKeyCloseModal);

  modalCreate = basicLightbox.create(
    `<img src=${event.target.dataset.source} alt = "${event.target.alt}"/>`,
  );

  modalCreate.show();

  const basicLightboxRef = document.querySelector('.basicLightbox');

  basicLightboxRef.addEventListener('click', removeEventListenerFromWindow);
}

function onEscapeKeyCloseModal(event) {
  if (event.code === 'Escape') {
    console.log('hi');
    modalCreate.close();
    removeEventListenerFromWindow();
  }
}

function removeEventListenerFromWindow() {
  window.removeEventListener('keyup', onEscapeKeyCloseModal);
}
