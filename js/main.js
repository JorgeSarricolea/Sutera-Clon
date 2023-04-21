

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

// Functions for radio form (Prices)
var options = document.querySelectorAll('.prices-container .option-price');

// Select default option
options[2].classList.add('selected');

// Add event click forEach
options.forEach(function (option) {
    option.addEventListener('click', function () {
        // Remove selected class
        options.forEach(function (o) {
            o.classList.remove('selected');
        });
        // Add selected class
        this.classList.add('selected');
    });
});

// Functions for radio form (Prices)
let optionsPayment = document.querySelectorAll('.payment-method .option-payment');
let creditCard_section = document.getElementById('step-4');

// Select default option
optionsPayment[0].classList.add('selected');

// Add event click forEach
optionsPayment.forEach(function (optionPayment) {
    optionPayment.addEventListener('click', function () {
        // Remove selected class
        optionsPayment.forEach(function (o) {
            o.classList.remove('selected');
        });
        // Add selected class
        this.classList.add('selected');

        // If user select Credit Card as a payment

        if (this.id === 'credit-cards') {
            // Show credit card form
            creditCard_section.classList.add('section-selected');
        } else {
            creditCard_section.classList.remove('section-selected');
        }
    });
});

// Dropdown countries REST API (Lada)

let linkLada = 'https://restcountries.com/v3.1/all';

fetch(linkLada)
    .then(response => response.json())
    .then(countries => {
        let select = document.getElementById('country_code');
        for (let country of countries) {
            let option = document.createElement('option');
            let lada = country.idd.root + country.idd.suffixes;
            let name = country.name.common;
            option.value = lada;
            option.text = `${name} (${lada})`;
            select.add(option);
        }
    })
    .catch(error => console.error(error));

// Dropdown Countries - Shipping Address

fetch(linkLada)
    .then(response => response.json())
    .then(countries => {
        let select = document.getElementById('country');
        for (let country of countries) {
            let option = document.createElement('option');
            let name = country.name.common;
            option.text = `${name}`;
            select.add(option);
        }
    })
    .catch(error => console.error(error));

// Dropdown States - Shipping Address

/* I decided to declare an array with the states of Mexico,
I was researching and I did not find a free API that would allow
me to obtain the states of each country in json format */

const statesMX = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas"
];

let select = document.getElementById('state');
for (let i = 0; i < statesMX.length; i++) {
    let option = document.createElement('option');
    option.text = statesMX[i];
    select.add(option);
}




