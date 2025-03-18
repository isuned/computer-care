// Get the dropdown menu button
const menuButton = document.querySelector(".dropdown button");
const dropdownContent = document.querySelector(".dropdown .content");

// Toggle dropdown menu when clicking the button
menuButton.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
});

// Close dropdown if user clicks outside
window.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});

