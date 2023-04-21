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

// Focus on error inputs
let error = '2px solid #c91f3f';
const step2 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');
const step5 = document.getElementById('step-5');
const errorMsg = 'This Field Is Required';

// Results
const optionSelected = document.getElementById('step-3')

// Functions for radio form (Prices)
const options = document.querySelectorAll('.prices-container .option-price');

// Select default option
options[2].classList.add('selected');

// Prices forEach
let price1 = 49.97;
let price2 = 46.97*2;
let price3 = 44.97*3;
let price4 = 42.97*4;
let price5 = 39.97*5;

// Add event click forEach
options.forEach(function (option) {
    option.addEventListener('click', function () {
        // Remove selected class
        options.forEach(function (o) {
            o.classList.remove('selected');
        });
        // Add selected class
        this.classList.add('selected');

        // Calculate final price
        let selectedPrice = 0;
        let protection = 19.97;
        let priceProtection = 0;
        let shipping = 0;
        let detail;
        if (this.id === 'price-1') {
            selectedPrice = price1 + 9.45;
            detail = '50% OFF: 1 Sutera™ Pillow';
            priceProtection = selectedPrice + protection;
            shipping = '$' + 9.45;
        } else if (this.id === 'price-2') {
            selectedPrice = price2;
            detail = '53% OFF: 2 Sutera™ Pillows';
            priceProtection = price2 + protection;
            shipping = 'FREE';
        } else if (this.id === 'price-3') {
            selectedPrice = price3;
            detail = '55% OFF: 3 Sutera™ Pillows';
            priceProtection = price3 + protection;
            shipping = 'FREE';
        } else if (this.id === 'price-4') {
            selectedPrice = price4;
            detail = '57% OFF: 4 Sutera™ Pillows';
            priceProtection = price4 + protection;
            shipping = 'FREE';
        } else if (this.id === 'price-5') {
            selectedPrice = price5;
            detail = '60% OFF: 5 Sutera™ Pillows';
            priceProtection = price5 + protection;
            shipping = 'FREE';
        }

        // Update final price element
        let finalPrice = document.querySelector('#final-price h2');
        let detailsSelected = document.querySelector('#details h3');
        let priceDetail = document.querySelector('#price-detail h3');
        let protectionSelect = document.querySelector('#price-protection h2');
        let shippingPrice = document.querySelector('#shipping-cost h2');

        // Result
        let details = document.querySelector('#main-results .details');
        let price = document.querySelector('#main-results .price');
        let shippingCost = document.querySelector('#main-results .shipping');
        price.textContent = '$' + selectedPrice;
        details.textContent = detail;
        shippingCost.textContent = shipping;

        finalPrice.textContent = '$' + selectedPrice.toFixed(2);
        detailsSelected.textContent = detail;
        priceDetail.textContent = selectedPrice;
        protectionSelect.textContent = '$' + priceProtection.toFixed(2);
        shippingPrice.textContent = shipping;
    });
});

// Functions for radio form (Payment Method)
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
            //Change the tittle Step of the last one (Step 4 to Step 6)
            let newTittle = document.querySelector('#step-6 h2');
            newTittle.textContent = 'STEP 6: ORDER SUMMARY';
            let paymentCard =  document.querySelector('.wrapper .payment-method-ticket')
            paymentCard.textContent = 'Credit Card';

            // shipping-address Form

            const shippingAddress_Form = document.getElementById('shipping-address');

            submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // to prevent the form from submitting

                const streetAddressInput = document.getElementById('street-address');
                const apartmentSuiteInput = document.getElementById('apartment-suite');
                const countryInput = document.getElementById('country');
                const stateInput = document.getElementById('state');
                const zipCodeInput = document.getElementById('zip-code');
                const creditCardNumberInput = document.getElementById('credit-card-number');
                const securityCodeInput = document.getElementById('security-code');
                const cardMonthInput = document.getElementById('card-month');
                const cardYearInput = document.getElementById('card-year');


                // Check if required fields have a value
                if (!streetAddressInput.value || !apartmentSuiteInput.value || !countryInput.value || !stateInput.value ||
                    !zipCodeInput.value || !creditCardNumberInput.value || !securityCodeInput.value || !cardMonthInput.value || 
                    !cardYearInput.value) {
                    streetAddressInput.style.border = error;
                    apartmentSuiteInput.style.border = error;
                    countryInput.style.border = error;
                    zipCodeInput.style.border = error;
                    creditCardNumberInput.style.border = error;
                    securityCodeInput.style.border = error;
                    cardYearInput.style.border = error;
                    step4.scrollIntoView({ behavior: 'smooth' });
                } else {
                    shippingAddress_Form.submit(); // submit the form
                }
            });
        } else {
            creditCard_section.classList.remove('section-selected');
            let paymentPaypal =  document.querySelector('.wrapper .payment-method-ticket')
            paymentPaypal.textContent = 'Paypal';
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
I was researching and I did't find a free API that would allow
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

// Functions for radio form (Billing)
let optionsBilling = document.querySelectorAll('.billing-options .option-billing');
let newAddress = document.getElementById('billing-form');

// Select default option
optionsBilling[0].classList.add('selected');

// Add event click forEach
optionsBilling.forEach(function (option) {
    option.addEventListener('click', function () {
        // Remove selected class from all options
        optionsBilling.forEach(function (o) {
            o.classList.remove('selected');
        });

        // Add selected class and checkmark to clicked option
        this.classList.add('selected');

        // If user selects "Use a different billing address"
        if (this.id === 'new-address') {
            // Show billing address form
            newAddress.classList.add('section-selected');

            // billing-form Form
            const newBilling_Form = document.getElementById('billing-form');

            submitBtn.addEventListener('click', function (event) {
            event.preventDefault(); // to prevent the form from submitting

                const nameInput = document.getElementById('name');
                const lastNameInput = document.getElementById('last_name');
                const streetAddressInput = document.getElementById('street-address');
                const apartmentSuiteInput = document.getElementById('apartment-suite');
                const countryInput = document.getElementById('country-billing');
                const stateInput = document.getElementById('state-billing');
                const zipCodeInput = document.getElementById('zip-code');

                // Check if required fields have a value
                if (!nameInput.value || !lastNameInput.value || !streetAddressInput.value ||
                    !apartmentSuiteInput.value || !countryInput.value || !stateInput.value ||
                    !zipCodeInput.value) {
                    nameInput.style.border = error;
                    lastNameInput.style.border = error;
                    streetAddressInput.style.border = error;
                    apartmentSuiteInput.style.border = error;
                    countryInput.style.border = error;
                    stateInput.style.border = error;
                    zipCodeInput.style.border = error;
                    step5.scrollIntoView({ behavior: 'smooth' });
                } else {
                    newBilling_Form.submit(); // submit the form
                }
            });
        } else {
            newAddress.classList.remove('section-selected');
        }
    });
});

// Dropdown Countries - New Billing Address
fetch(linkLada)
    .then(response => response.json())
    .then(countries => {
        let select = document.getElementById('country-billing');
        for (let country of countries) {
            let option = document.createElement('option');
            let name = country.name.common;
            option.text = `${name}`;
            select.add(option);
        }
    })
    .catch(error => console.error(error));

// Dropdown States - New Billing Address
let selectState = document.getElementById('state-billing');
for (let i = 0; i < statesMX.length; i++) {
    let option = document.createElement('option');
    option.text = statesMX[i];
    selectState.add(option);
}

// Functions for radio check Protection
const optionProtection = document.querySelectorAll('.protecion-options .option-protection');

// Add event click forEach
optionProtection.forEach(function (option) {
    option.addEventListener('click', function () {
        // Check if clicked option is already selected
        const isSelected = this.classList.contains('selected');

        // Remove selected class from all options
        optionProtection.forEach(function (o) {
            o.classList.remove('selected');
        });

        const totalProtection = document.querySelector('.total-protection');
        const normalPrice = document.querySelector('.total-tax');
        const warranty = document.querySelector('.warranty-text');

        if (!isSelected) {
            this.classList.add('selected');
            totalProtection.style.display = 'flex';
            warranty.style.display = 'flex';
            normalPrice.style.display = 'none';
        } else {
            totalProtection.style.display = 'none';
            warranty.style.display = 'none';
            normalPrice.style.display = 'flex';
        }
    });
});

// Functions for radio check Privacy
const optionPrivacy = document.querySelectorAll('.privacy-options .option-privacy');

// Add event click forEach
optionPrivacy.forEach(function (option) {
    option.addEventListener('click', function () {
        // Check if clicked option is already selected
        const isSelected = this.classList.contains('selected');

        // Remove selected class from all options
        optionPrivacy.forEach(function (o) {
            o.classList.remove('selected');
        });

        if (!isSelected) {
            this.classList.add('selected');

        }
    });
});

// Submit button
const submitBtn = document.getElementById('submit-btn');

// user-register From
const userRegister_Form = document.getElementById('user-register');

submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // to prevent the form from submitting

    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last_name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    if (!nameInput.value || !lastNameInput.value || !emailInput.value || !phoneInput.value) {
        nameInput.style.border = error;
        lastNameInput.style.border = error;
        emailInput.style.border = error;
        phoneInput.style.border = error;
        step2.scrollIntoView({ behavior: 'smooth' });
    } else {
        this.addEventListener('submit', function(event) {
            event.preventDefault();
        });

        // Show the results int Ticket
        let tiketName =  document.querySelector('.wrapper .input-name');
        let tiketLastName =  document.querySelector('.wrapper .input-lastname');
        let tiketEmail =  document.querySelector('.wrapper .input-email');
        let tiketNumber =  document.querySelector('.wrapper .input-number');


        tiketName.textContent = nameInput.value;
        tiketLastName.textContent =lastNameInput.value;
        tiketEmail.textContent = emailInput.value;
        tiketNumber.textContent = phoneInput.value;
    }
});

