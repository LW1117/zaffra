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
        currentSlideIndex = 0;
    }
    updateCarousel();
};

const moveToPrevSlide = () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = slides.length - 1;
    }
    updateCarousel();
};

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

updateCarousel();

const autoLoopInterval = 3000;
let autoLoop = setInterval(moveToNextSlide, autoLoopInterval);

[nextButton, prevButton].forEach(button => {
    button.addEventListener('mouseenter', () => clearInterval(autoLoop));
    button.addEventListener('mouseleave', () => {
        autoLoop = setInterval(moveToNextSlide, autoLoopInterval);
    });
});