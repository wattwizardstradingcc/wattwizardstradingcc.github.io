document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = 0;
        } else if (index >= cards.length) {
            index = cards.length - 1;
        }
        currentIndex = index;
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });
});
