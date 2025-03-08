document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("md-content"); // Where Markdown will be displayed
    const listContainer = document.getElementById("notes-list"); // Notes list container
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get("file"); // Get file from ?file=xyz.md

    // 🔹 Load File List from JSON
    fetch('file-list.json')
        .then(response => response.json())
        .then(files => {
            files.java.forEach(file => {
                let li = document.createElement('li');
                li.innerHTML = `<a href="index.html?file=java/${file}">${file.replace('.md', '')}</a>`;
                listContainer.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading file list:", error));

    // 🔹 If ?file=xyz.md is Present, Load and Render It
    if (fileName) {
        fetch(fileName)
            .then(response => response.text())
            .then(mdText => {
                let converter = new showdown.Converter({ tables: true, ghCodeBlocks: true });
                let html = converter.makeHtml(mdText);
                contentDiv.innerHTML = html;
            })
            .catch(error => console.error("Error loading Markdown file:", error));
    }
});
