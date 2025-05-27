let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

rock.addEventListener("click", () => playGame("Rock"));
paper.addEventListener("click", () => playGame("Paper"));
scissor.addEventListener("click", () => playGame("Scissors"));

function playGame(userChoice) {
    const result = document.querySelector("#msg");
    const compImageContainer = document.querySelector(".compImage");

    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const compChoice = choices[randomIndex];

    // Display computer's image
    compImageContainer.innerHTML = `<img src="${compChoice.toLowerCase()}.png" alt="${compChoice}">`;

    if (userChoice === compChoice) {
        result.innerText = "It's a draw!";
        result.style.backgroundColor = "#00ffff";
        result.style.color = "black";
    } else if (
        (userChoice === "Rock" && compChoice === "Scissors") ||
        (userChoice === "Paper" && compChoice === "Rock") ||
        (userChoice === "Scissors" && compChoice === "Paper")
    ) {
        result.innerText = `You win! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        result.style.color = "white";
        userScore++;
        userScoreDisplay.innerText = userScore;
    } else {
        result.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
}
