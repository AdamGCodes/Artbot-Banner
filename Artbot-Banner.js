// Artbot Banner JavaScript
// Variables
const bannerContent = document.querySelector('.banner-content');
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselHeadings = document.querySelectorAll('.carousel-heading');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const carousel = document.getElementById('carousel');

//Carousel Variables
let currentIndex = 0;
let autoplay = true;
let autoplayTimer = null;
const totalImages = carouselImages.length;
const autoplayInterval = 15000; // milliseconds


//Carousel Functions
// Helper function Show image and heading at index
function showSlide(index, direction = 1) {
    // Hide all
    ImageTrackList.forEach((img, i) => {
        img.classList.remove('active');
        WebGLSampler.set(img, {y: 0, opacity: 1});
    });
    HTMLHeadingElement.forEach((heading, i) => {
        heading.classList.remove('active');
        gsap.set(heading, {y: 0, opacity: 1});
    });
    // Animate out current slide

    // Animate in next
}

// Next/Previous slide
function nextSlide() {

}
function previousSlide() {

}

//Auto-play 
function startAutoPlay() {

}

function stopAutoPlay() {

}

//User interaction pauses autoplay


//Resume autoplay (use on mouse leave)


// Arrow navigation


// Initialize carousel

//Test updated