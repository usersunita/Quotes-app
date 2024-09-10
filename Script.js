
const quotes = {
    science: [
        "Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back. – Bill Nye",
        "The important thing is not to stop questioning. Curiosity has its own reason for existing. – Albert Einstein",
        "Somewhere, something incredible is waiting to be known. – Carl Sagan"
    ],
    motivation: [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
    ]
};

let currentCategory = 'motivation';
let currentIndex = 0;
let fontSize = 20;

const quoteDisplay = document.getElementById('quote');
const categorySelector = document.getElementById('category');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random');
const increaseFontButton = document.getElementById('increasefont');
const decreaseFontButton = document.getElementById('decreasefont');
const modeToggle = document.getElementById('modeToggle');


function displayQuote() {
    quoteDisplay.textContent = quotes[currentCategory][currentIndex];
}

function updateFontSize() {
    quoteDisplay.style.fontSize = `${fontSize}px`;
}

categorySelector.addEventListener('change', function () {
    currentCategory = categorySelector.value;
    currentIndex = 0;
    displayQuote();
});

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote();
    }
});

nextButton.addEventListener('click', function () {
    if (currentIndex < quotes[currentCategory].length - 1) {
        currentIndex++;
        displayQuote();
    }
});

randomButton.addEventListener('click', function () {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
});

increaseFontButton.addEventListener('click', function () {
    fontSize += 2;
    updateFontSize();
});

decreaseFontButton.addEventListener('click', function () {
    if (fontSize > 12) {
        fontSize -= 2;
        updateFontSize();
    }
});


displayQuote();
updateFontSize();
