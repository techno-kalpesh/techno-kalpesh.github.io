document.addEventListener("DOMContentLoaded", function () {
    // Highlight the current menu item
    document.querySelectorAll(".main-menu a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("current");
        }
    });

    // Toggle dark mode
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Load file list
    loadFileList();
});

function toggleDropdown(id) {
    const list = document.getElementById(id + "-list");
    list.style.display = (list.style.display === "block") ? "none" : "block";
}

async function loadFileList() {
    try {
        const response = await fetch("file-list.json");
        const data = await response.json();
        Object.keys(data).forEach(category => {
            const list = document.getElementById(category + "-list");
            if (list) {
                data[category].forEach(file => {
                    const listItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.href = `./${category}/${file}`;
                    link.textContent = file.replace(".md", "").replace("-", " ");
                    link.onclick = (event) => {
                        event.preventDefault();
                        loadMarkdown(`${category}/${file}`);
                    };
                    listItem.appendChild(link);
                    list.appendChild(listItem);
                });
            }
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
        hljs.highlightAll();
    } catch (error) {
        document.getElementById("markdown-container").innerHTML = "<p>Error loading file.</p>";
    }
}
