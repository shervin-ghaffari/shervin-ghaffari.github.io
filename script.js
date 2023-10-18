// JavaScript to handle smooth scrolling to the "About Me" section
document.getElementById("more-about-button").addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
});

