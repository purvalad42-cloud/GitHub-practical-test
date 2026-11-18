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