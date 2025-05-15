const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let currentSlideIndex = 0;

const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
};

const moveToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop back to the first slide
    }
    updateCarousel();
};

const moveToPrevSlide = () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = slides.length - 1; // Loop back to the last slide
    }
    updateCarousel();
};

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

// Initialize carousel
updateCarousel();

// Auto-loop the carousel
const autoLoopInterval = 3000; // Time in milliseconds (3 seconds)
let autoLoop = setInterval(moveToNextSlide, autoLoopInterval);

// Pause auto-loop on button hover
[nextButton, prevButton].forEach(button => {
    button.addEventListener('mouseenter', () => clearInterval(autoLoop));
    button.addEventListener('mouseleave', () => {
        autoLoop = setInterval(moveToNextSlide, autoLoopInterval);
    });
});