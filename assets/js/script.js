// 🌙 Get the theme toggle button
const toggleButton = document.getElementById("theme-toggle");

// 🌙 Add event listener to toggle dark mode when clicked
toggleButton.addEventListener("click", () => {
    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode class on menu
    document.querySelector(".main-menu").classList.toggle("dark-mode");

    // Change the button icon based on mode
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";  // Change to sun icon
    } else {
        toggleButton.textContent = "🌙";  // Change to moon icon
    }
});

let filesList = [];
let currentIndex = 0;

async function loadFileList() {
    try {
        const response = await fetch("file-list.json");
        const data = await response.json();

        filesList = [];
        Object.keys(data).forEach(category => {
            data[category].forEach(file => {
                filesList.push(`${category}/${file}`);
            });
        });
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
    
    let prevButton = currentIndex > 0
        ? `<button onclick="navigateFile(-1)">⬅️ Previous</button>`
        : "";
    
    let nextButton = currentIndex < filesList.length - 1
        ? `<button onclick="navigateFile(1)">Next ➡️</button>`
        : "";

    container.innerHTML += `<div class="nav-buttons">${prevButton} ${nextButton}</div>`;
}

function navigateFile(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filesList.length) {
        loadMarkdown(filesList[newIndex]);
    }
}

// Load file list on page load
loadFileList();
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".main-menu a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("current");
        }
    });
});
