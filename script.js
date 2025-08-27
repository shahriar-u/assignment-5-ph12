// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

const heartCountElement = document.getElementById("heart-nav");
let heartCount = 0;

const hearts = document.getElementsByClassName("fa-heart");

for (let i = 0; i < hearts.length; i++) {
    let heart = hearts[i];
    heart.style.cursor = "pointer";

    heart.addEventListener('click', () => {
        heartCount++;  
        heartCountElement.innerText = heartCount; 
    });
}

