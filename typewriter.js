const textElements = [
    "interested in Software engineering.",
    "passionate about Networking.",
    "fascinated by AI."
];

let elementIndex = 0;
let charIndex = 0;
const speed = 50; // Adjust the speed (milliseconds per character) as needed.
const textElement = document.getElementById("typewriter");

function typeWriter() {
    if (charIndex < textElements[elementIndex].length) {
        textElement.innerHTML += textElements[elementIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Wait for a second before erasing the text.
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 4) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, speed / 2); // Erase faster
    } else {
        elementIndex = (elementIndex + 1) % textElements.length;
        charIndex = 0;
        setTimeout(typeWriter, 500); // Wait for half a second before typing the next text.
    }
}

// Start the typewriter effect after the page loads.
window.onload = typeWriter;

// JavaScript to handle smooth scrolling to the "About Me" section

