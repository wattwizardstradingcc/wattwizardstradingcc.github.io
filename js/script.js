// JavaScript for sliding cards
let currentIndex = 0;
const cards = document.querySelectorAll('.slider-card');

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

// Initially show the first card
showCard(currentIndex);

// Set interval to slide every 5 seconds (adjust as needed)
setInterval(nextCard, 5000);
