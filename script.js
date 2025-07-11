// Artbot Banner JavaScript
// Carousel Variables
let currentIndex = 0;
let autoplay = true;
let autoplayTimer = null;
let imageCount = 0;
const autoplayDelay = 1500; // milliseconds
const animationDuration = 0.6; // seconds

// DOM Elements (will be initialized after DOM loads)
let carouselImages;
let carouselHeadings;
let leftArrow;
let rightArrow;

//Carousel Functions
// Helper function Show image and heading at index
function showSlide(index, direction = 1) {
    // Hide all
    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
    });
    carouselHeadings.forEach((heading, i) => {
        heading.classList.remove('active');
    });
    
    // Animate out current slide
    const prev = currentIndex;
    if (prev !== index && carouselImages[prev] && carouselHeadings[prev]) {
        gsap.to(carouselImages[prev], {opacity: 0, duration: animationDuration, onComplete: () => {
            carouselImages[prev].classList.remove('active');
        }});
        gsap.to(carouselHeadings[prev], {opacity: 0, duration: animationDuration, onComplete: () => {
            carouselHeadings[prev].classList.remove('active');
        }});
    }

    // Animate in next
    if (carouselImages[index] && carouselHeadings[index]) {
        carouselImages[index].classList.add('active');
        gsap.fromTo(carouselImages[index], {opacity: 0}, {opacity: 1, duration: animationDuration});
        carouselHeadings[index].classList.add('active');
        gsap.fromTo(carouselHeadings[index], {opacity: 0}, {opacity: 1, duration: animationDuration});
    }
    currentIndex = index;
}

// Next/Previous slide
function nextSlide() {
    showSlide((currentIndex + 1) % imageCount, 1);
}

function previousSlide() {
    showSlide((currentIndex - 1 + imageCount) % imageCount, -1);
}

//Auto-play 
function startAutoPlay() {
    autoplay = true;
    clearTimeout(autoplayTimer);
    autoplayTimer = setTimeout(function loop(){
        if (autoplay) {
            nextSlide();
            autoplayTimer = setTimeout(loop, autoplayDelay);
        }
    }, autoplayDelay);
}

function pauseAutoPlay() {
    autoplay = false;
    clearTimeout(autoplayTimer);
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    carouselImages = document.querySelectorAll('.carousel-image');
    carouselHeadings = document.querySelectorAll('.carousel-heading');
    leftArrow = document.getElementById('previous');
    rightArrow = document.getElementById('next');
    
    // Set image count
    imageCount = carouselImages.length;
    
    // Arrow navigation with autoplay control
    leftArrow.addEventListener('click', function() {
        pauseAutoPlay();
        previousSlide();
        setTimeout(startAutoPlay, 3000);
    });
    
    rightArrow.addEventListener('click', function() {
        pauseAutoPlay();
        nextSlide();
        setTimeout(startAutoPlay, 3000);
    });
    
    // Start the carousel
    showSlide(0);
    startAutoPlay();
});