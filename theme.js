const themeBtn = document.getElementById("themeToggle");

// Set initial text based on mode
if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Light Mode";
} else {
    themeBtn.textContent = "Dark Mode";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});
