import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      messageColor: '#fafafb',
      color: '#EF4040',
      position: 'topRight',
      maxWidth: '432px',
    });
    return;
  }

  if (lightbox) {
    lightbox.destroy();
  }

  gallery.innerHTML = '<p>Loading images, please wait...</p>';

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#fafafb',
        color: '#EF4040',
        position: 'topRight',
        maxWidth: '432px',
      });
      gallery.innerHTML = '';
    } else {
      gallery.innerHTML = '';
      renderGallery(images);

      lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({ message: 'Error' });
    gallery.innerHTML = '<p>Error</p>';
  }
});
