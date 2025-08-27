// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

const heartCountElement = document.getElementById("heart-nav");
let heartCount = 0;

const hearts = document.getElementsByClassName("heart-from-card");

for (let i = 0; i < hearts.length; i++) {
    let heart = hearts[i];
    heart.style.cursor = "pointer";

    heart.addEventListener('click', () => {
        heartCount++;
        heartCountElement.innerText = heartCount;
    });
}

// call button functionality

const coinCountTotal = document.getElementById("coin");
let availableCoin = 100;

const callBtns = document.querySelectorAll(".call-button");
const callList = document.getElementById("call-history");
const clearListBtn = document.getElementById("clear-history");

for (let i = 0; i < callBtns.length; i++) {
    callBtns[i].addEventListener("click", () => {

        const cardBody = callBtns[i].closest(".card-body");
        const serviceName = cardBody.querySelector(".service-name").innerText;
        const serviceNumber = cardBody.querySelector(".service-number").innerText;

        if (availableCoin < 20) {
            alert("You don’t have enough coins to make a call. Minimum 20 coins required.");
            return;
        }
        alert(`Calling ${serviceName} at ${serviceNumber} ...`);

        availableCoin -= 20;
        coinCountTotal.innerText = availableCoin;

        const li = document.createElement("li");
        li.innerHTML = `<b>${serviceName}</b> - <br> ${serviceNumber}`;
        callList.appendChild(li);

    });

}
clearListBtn.addEventListener("click", () => {
    callList.innerHTML = "";
});

// call history 

