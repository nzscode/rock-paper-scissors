let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let scoreBar = document.getElementById("scoreBar");
let scoreContainer = document.getElementById("scoreContainer");
let turnBanner = document.getElementById("turnBanner");
let userChoiceBanner = document.getElementById("userChoice");
let compChoiceBanner = document.getElementById("compChoice");
let player = "Player";
let compChoice = "";
let playerChoice;
let turn = 0;
let options = ["Rock", "Paper", "Scissors"];

function computerChoice() {
    let x = Math.floor(Math.random() * 3);
    turn += 1;
    return x;
}

function changeBanner() {
    turnBanner.textContent = `It is ${player}'s turn`;
}

function displayChoice(banner, choice) {
    banner.textContent = choice;
}

let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", () => {
        console.log(btn.id);
        btn.classList.add("clicked");
    });
}
