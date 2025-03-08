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
    async function loadMarkdown(file) {  
    try {  
        const response = await fetch(file);  
        const text = await response.text();  

        // Convert Markdown to HTML
        document.getElementById("markdown-container").innerHTML = marked.parse(text);  

        // Apply syntax highlighting for code blocks
        document.querySelectorAll("pre code").forEach((block) => {  
            hljs.highlightElement(block);  
        });  
    } catch (error) {  
        document.getElementById("markdown-container").innerHTML = "<p>Error loading file.</p>";  
    }  
    }
});
