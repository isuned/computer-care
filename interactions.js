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

// function to close dropdown when user leaves the area 
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





document.getElementById('pc-specs-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cpu = document.getElementById('cpu').value.toLowerCase();
    const ram = parseInt(document.getElementById('ram').value);
    const gpu = document.getElementById('gpu').value.toLowerCase();

    let performance = "Unknown";
    let advice = "";

    // performance check function to run basic check 
    if ((cpu.includes("i5") || cpu.includes("ryzen 5") || cpu.includes("i7")) && ram >= 16 && gpu.includes("gtx") || gpu.includes("rtx")) {
        performance = "Excellent";
        advice = "Your PC is well-equipped for gaming and demanding tasks.";
    } else if ((cpu.includes("i3") || cpu.includes("ryzen 3")) && ram >= 8 && (gpu.includes("gtx") || gpu.includes("rx"))) {
        performance = "Moderate";
        advice = "Your PC can handle most tasks and moderate gaming, but might struggle with heavier games.";
    } else {
        performance = "Low";
        advice = "Consider upgrading your hardware for better performance, especially RAM and GPU.";
    }

    // Display Result
    const resultText = `
        <strong>Performance:</strong> ${performance} <br>
        <strong>Advice:</strong> ${advice}
    `;
    document.getElementById('result-text').innerHTML = resultText;
    document.getElementById('performance-result').classList.remove('hidden');
});

