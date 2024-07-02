document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width
    const numCards = cards.length;
    let currentIndex = 0;

    slider.style.width = `${cardWidth * numCards}px`; // Set slider width to fit all cards

    function showSlide(index) {
        if (index < 0) {
            index = 0;
        } else if (index >= numCards) {
            index = numCards - 1;
        }
        currentIndex = index;
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });
});
