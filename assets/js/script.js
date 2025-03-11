// 🌙 Get the theme toggle button
const toggleButton = document.getElementById("theme-toggle");

// 🌙 Add event listener to toggle dark mode when clicked
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".main-menu").classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

let filesList = [];
let currentIndex = 0;

async function loadFileList() {
    try {
        const response = await fetch("file-list.json");
        const data = await response.json();
        filesList = Object.values(data).flat().map(file => `${file}`);
    } catch (error) {
        console.error("Error loading file list:", error);
    }
}

async function loadMarkdown(file) {
    try {
        const response = await fetch(file);
        const text = await response.text();
        document.getElementById("markdown-container").innerHTML = marked.parse(text);
        currentIndex = filesList.indexOf(file);
        showNavigationButtons();
    } catch (error) {
        document.getElementById("markdown-container").innerHTML = "<p>Error loading file.</p>";
    }
}

function showNavigationButtons() {
    const container = document.getElementById("markdown-container");
    container.innerHTML += `
        <div class="nav-buttons">
            ${currentIndex > 0 ? '<button onclick="navigateFile(-1)">⬅️ Previous</button>' : ''}
            ${currentIndex < filesList.length - 1 ? '<button onclick="navigateFile(1)">Next ➡️</button>' : ''}
        </div>`;
}

function navigateFile(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filesList.length) {
        loadMarkdown(filesList[newIndex]);
    }
}

// Load file list on page load
loadFileList();
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".main-menu a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("current");
        }
    });
});
