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
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        filesList = data.files;
    } catch (error) {
        console.error("Error loading file list:", error);
    }
}

async function loadMarkdown(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        document.getElementById("markdown-container").innerHTML = marked.parse(text);
        currentIndex = filesList.indexOf(file);
        showNavigationButtons();
    } catch (error) {
        document.getElementById("markdown-container").innerHTML = "<p>Error loading file.</p>";
        console.error("Error loading markdown file:", error);
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

document.addEventListener("DOMContentLoaded", function () {
    // Highlight current page in the menu
    document.querySelectorAll(".main-menu a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("current");
        }

        // Add event listener for menu items
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = link.getAttribute("href");

            // Check if Home is clicked
            if (targetPage === "index.html" || targetPage === "./") {
                loadFileList(); // Load file list if navigating to Home 
            }

            // Load the content for the clicked link
            fetch(targetPage)
                .then(response => response.text())
                .then(content => {
                    document.getElementById("content-container").innerHTML = content;
                })
                .catch(error => console.error("Error loading content:", error));
        });
    });

    // Load about.md content in the About page (index.html)
    if (window.location.pathname.includes("index.html")) {
        fetch("about.md")
            .then(response => response.text())
            .then(markdown => {
                document.getElementById("about-content").innerHTML = new showdown.Converter().makeHtml(markdown);
            })
            .catch(error => console.error("Error loading about.md:", error));
    }
});

// Load file list on page load
loadFileList();
