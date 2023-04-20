// Functions for carousel images
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const thumbnails = document.getElementsByClassName('thumbnail');

let currentIndex = 0;

function showImage(index) {
    images[currentIndex].style.display = 'none';
    currentIndex = index;
    images[currentIndex].style.display = 'block';
    updateThumbnailSelected();
}

function prevImage() {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
}

function nextImage() {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
}

function updateThumbnailSelected() {
    for (let i = 0; i < thumbnails.length; i++) {
        if (i === currentIndex) {
        thumbnails[i].classList.add('selected');
        } else {
        thumbnails[i].classList.remove('selected');
        }
    }
}

function selectImageByThumbnail(event) {
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i] === event.target) {
        showImage(i);
        updateThumbnailSelected();
        break;
        }
    }
}

// Listener to the buttons (next or prev)
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Listener to the thumbnails
for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', selectImageByThumbnail);
}

// Functions for radio form

var options = document.querySelectorAll('.prices-container .option-price');

// Select default option
options[2].classList.add('selected');

// Add event click forEach
options.forEach(function(option) {
    option.addEventListener('click', function() {
        // Remove selected class
        options.forEach(function(o) {
        o.classList.remove('selected');
        });
        // Add selected class
        this.classList.add('selected');
    });
});
