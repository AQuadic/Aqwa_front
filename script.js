document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const menuItems = document.getElementById('navbar-sticky');

    toggleButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const images = Array.from(carousel.getElementsByClassName('carousel-image'));
    const imageCount = images.length;
    const imageWidth = images[0].clientWidth + 16; 
    const containerWidth = carousel.parentElement.clientWidth;
    const centerOffset = (containerWidth - imageWidth) / 2;
    const carouselWidth = imageWidth * imageCount;

    let currentIndex = Math.floor(imageCount / 2);

    function updateCarousel(index) {
        if (index < 0) {
            index = imageCount - 1;
        } else if (index >= imageCount) {
            index = 0;
        }

        const offset = index * imageWidth - centerOffset;
        carousel.style.transform = `translateX(-${offset}px)`;

        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });

        currentIndex = index;
    }

    function autoSlide() {
        updateCarousel(currentIndex + 1);
    }

    carousel.style.width = `${carouselWidth}px`;
    updateCarousel(currentIndex);

    const slideInterval = 3000; 
    let autoSlideInterval = setInterval(autoSlide, slideInterval);

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval); 
        updateCarousel(currentIndex - 1);
        autoSlideInterval = setInterval(autoSlide, slideInterval); 
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval); 
        updateCarousel(currentIndex + 1);
        autoSlideInterval = setInterval(autoSlide, slideInterval); 
    });
});
