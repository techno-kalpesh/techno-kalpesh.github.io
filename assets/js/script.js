// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".main-menu").classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Load content when clicking sidebar links
function loadContent(page) {
    document.getElementById("content-frame").src = page;
}

// Automatically load first topic on page load
window.onload = function() {
    loadContent('01-introduction.html');
};
