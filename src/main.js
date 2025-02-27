import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

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
    }
  } catch (error) {
    iziToast.error({ message: 'Error' });
    gallery.innerHTML = '<p>Loading images, please wait...</p>';
  }
});
