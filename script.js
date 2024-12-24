const csm = document.querySelector('.csm'); // Container for the cards
const cards = document.querySelectorAll('.sergent'); // Individual cards

let currentIndex = 0; // Start at the first card
const totalCards = cards.length; // Number of cards
const slideDuration = 3500; // Time in milliseconds for each slide

// Duplicate the first card to create an infinite loop
const firstCard = cards[0].cloneNode(true);
csm.appendChild(firstCard);

// Function to update the slide position
function updateSlide() {
    currentIndex++;
    csm.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the next card
    csm.style.transition = 'transform 0.5s ease-in-out';

    // If it's the last (cloned) slide, reset to the first slide
    if (currentIndex === totalCards) {
        setTimeout(() => {
            csm.style.transition = 'none'; // Disable transition for reset
            csm.style.transform = 'translateX(0)'; // Jump back to the first slide
            currentIndex = 0; // Reset index
        }, 600); // Wait for the slide transition to finish
    }
}

// Start the auto-slide
setInterval(updateSlide, slideDuration);
