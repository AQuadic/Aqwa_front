//Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('navbar-toggle');
    const menuItems = document.getElementById('navbar-sticky');

    toggleButton.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
});

// Slider
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

// Responsive
    function handleResize() {
        containerWidth = carousel.parentElement.clientWidth;
        centerOffset = (containerWidth - imageWidth) / 2;
        updateCarousel(currentIndex);
    }

    window.addEventListener('resize', handleResize);
});

// Accordion
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion');
    headers.forEach(header => {
    header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('svg');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('visible');
        icon.classList.add('rotate-180');
    } else {
        content.classList.remove('visible');
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
    });
});
});
