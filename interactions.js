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
// toggling  visibility of hidden content section
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Hide the  content sections
        document.querySelectorAll('.hidden-content').forEach(content => {
            content.style.display = 'none';
        });

        // Get the target content ID and show it
        const targetContent = document.getElementById(this.getAttribute('data-target'));
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    });
});

// Close the dropdown when mouse leaves the dropdown area
document.querySelector(".dropdown").addEventListener("mouseleave", () => {
    dropdownContent.classList.remove("show");
});

//  when user clicks  outside of the menu zone 
window.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});

function showTwkContent(type) {
    const gamerContent = document.getElementById('gamer-content');
    const slowPCContent = document.getElementById('slow-pc-content');

    // Create a map to easily handle content visibility
    const contentMap = {
        'gamer': gamerContent,
        'slow-pc': slowPCContent
    };

    // Loop through the map and show only the selected content
    for (const key in contentMap) {
        if (key === type) {
            contentMap[key].classList.remove('hidden');
            contentMap[key].classList.add('show');
        } else {
            contentMap[key].classList.add('hidden');
            contentMap[key].classList.remove('show');
        }
    }
}
