// Functions to change carousel images

const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// This will be show or not the image
function showImage(index) {
    images[currentIndex].style.display = 'none';
    currentIndex = index;
    images[currentIndex].style.display = 'block';
}

// Show prev image
function prevImage() {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
}

// Show next image
function nextImage() {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
}

// Listener to the buttons (next or prev)
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Thumbnail functions

const thumbnails = document.getElementsByClassName('thumbnail');

// This will be show or not the image, this is necessary so that the thumbnail changes both when clicking with the buttons and on itself
function showImage(index) {
    images[currentIndex].style.display = 'none';
    currentIndex = index;
    images[currentIndex].style.display = 'block';
    updateThumbnailSelected();
}

// This will change the size of the thumbnail (by buttons)
function updateThumbnailSelected() {
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === currentIndex) {
            thumbnails[i].classList.add('selected');
        } else {
            thumbnails[i].classList.remove('selected');
        }
    }
}

// This will change the size of the thumbnail (by user selection)
function selectImageByThumbnail(event) {
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i] === event.target) {
            showImage(i);
            updateThumbnailSelected();
            break;
        }
    }
}

for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', selectImageByThumbnail);
}
updateThumbnailBorder();

