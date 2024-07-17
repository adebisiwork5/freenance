// script.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) {
        console.error('Carousel element not found');
        return;
    }

    const images = carousel.querySelectorAll('img');
    if (images.length === 0) {
        console.error('No images found in the carousel');
        return;
    }

    const totalImages = images.length;
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        console.log(`Transitioning to image index: ${currentIndex}, offset: ${offset}%`);
        carousel.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 3000);
});
