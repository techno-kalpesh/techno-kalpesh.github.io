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
