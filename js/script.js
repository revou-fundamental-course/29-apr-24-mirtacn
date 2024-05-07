document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let destination = document.getElementById('destination').value;
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let destinationError = document.getElementById('destinationError');

    let isValid = true;

    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (destination.trim() === '') {
        destinationError.textContent = 'Destination is required';
        isValid = false;
    } else {
        destinationError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValidEmail(email) {
    // Very basic email validation, can be improved
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// script.js
const carouselSlides = document.querySelector('.carousel-slides');
const totalSlides = carouselSlides.children.length;
let currentIndex = 0;

function slideToIndex(index) {
    const slideWidth = 600; // Width of each slide (same as the CSS width)
    const newTransform = -index * slideWidth;
    carouselSlides.style.transform = `translateX(${newTransform}px)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideToIndex(currentIndex);
}

setInterval(autoSlide, 1000); // Change slide every 3 seconds
