import { Images } from './src/data.js'

const galleryContainer = document.getElementById('gallery-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Function to Load Gallery Thumbnails
function loadGallery() {
  Images.forEach((img, index) => {
    const galleryItemCard = document.createElement('article');
    const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      

    const thumbnail = document.createElement('img');
    thumbnail.src = img.thumbnail;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.addEventListener('click', () => openLightbox(index));

    galleryItem.appendChild(thumbnail);
    galleryItemCard.appendChild(galleryItem);
    galleryContainer.appendChild(galleryItemCard);
  });
}

// Function to Open Lightbox
function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
}

// Function to Update Lightbox Content
function updateLightbox() {
  lightboxImg.src = Images[currentIndex].full;
  lightboxCaption.textContent = Images[currentIndex].caption;
  prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
  nextBtn.style.display = currentIndex === Images.length - 1 ? 'none' : 'block';
}

// Function to Close Lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Function for Next Image
function nextImage() {
  if (currentIndex < Images.length - 1) {
    currentIndex++;
    updateLightbox();
  } else {
      currentIndex = 0
  }
}

// Function for Previous Image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateLightbox();
  } else {
      currentIndex = Images.length - 1
  }
}

// Event Listeners
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Initial Load
loadGallery();
