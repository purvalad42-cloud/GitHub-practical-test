// Portfolio JavaScript

console.log("Welcome to Purva's Portfolio!");

alert("Welcome to my Personal Portfolio Website!");

// Portfolio Welcome Message

function welcomeUser() {
    let userName = prompt("Please enter your name:");

    if (userName !== null && userName.trim() !== "") {
        alert("Welcome " + userName + "! Thanks for visiting my portfolio.");
    } else {
        alert("Welcome to Kartik's Portfolio!");
    }
}

welcomeUser();

// Display Current Year

let currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

<button id="backToTop">Back to Top ↑</button>
// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});