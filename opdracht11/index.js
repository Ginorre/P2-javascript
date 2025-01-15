let hunger = 100;
let energy = 100;
let happiness = 100;


const hungerText = document.getElementById("hunger");
const energyText = document.getElementById("energy");
const happinessText = document.getElementById("happiness");
const statusMessage = document.getElementById("statusMessage");
const hungerBar = document.getElementById("hungerBar");
const energyBar = document.getElementById("energyBar");
const happinessBar = document.getElementById("happinessBar");


const feedButton = document.getElementById("feed");
const sleepButton = document.getElementById("sleep");
const playButton = document.getElementById("play");


function updateStatus() {
    hungerText.textContent = `Honger: ${hunger}`;
    energyText.textContent = `Energie: ${energy}`;
    happinessText.textContent = `Geluk: ${happiness}`;

    hungerBar.style.width = `${hunger}%`;
    energyBar.style.width = `${energy}%`;
    happinessBar.style.width = `${happiness}%`;

    if (hunger === 0 && energy === 0 && happiness === 0) {
        statusMessage.textContent = "Je Tamagotchi is dood!";
        statusMessage.classList.add("dead");
    } else {
        statusMessage.textContent = "Je Tamagotchi is gelukkig!";
        statusMessage.classList.remove("dead");
    }
}


feedButton.addEventListener("click", () => {
    hunger = Math.min(hunger + 10, 100);
    updateStatus();
});

sleepButton.addEventListener("click", () => {
    energy = Math.min(energy + 10, 100);
    updateStatus();
});

playButton.addEventListener("click", () => {
    happiness = Math.min(happiness + 10, 100);
    updateStatus();
});


setInterval(() => {
    hunger = Math.max(hunger - 1, 0);
    energy = Math.max(energy - 1, 0);
    happiness = Math.max(happiness - 1, 0);
    if (hunger === -1 && energy === -1 && happiness === -1) {
        statusMessage.textContent = "Je Tamagotchi is dood!";
        statusMessage.classList.add("dead");
        clearInterval(timer);
    }
    updateStatus();
}, 1000);


updateStatus();