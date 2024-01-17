let userScore = 0;
let compScore = 0;
let usSc = document.querySelector("#user-score");
let cpSc = document.querySelector("#comp-score");
const choiecs = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const reset = document.querySelector("#reset-btn");
const winnerAudio = new Audio("./sounds/victory.mp3");
const loseAudio = new Audio("./sounds/loseBuz.mp3");
const clickAudio = new Audio("./sounds/click.mp3");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    usSc.innerText = 0;
    cpSc.innerText = 0;
    msg.innerText = "Now Game Reset 'play Again!";
    msg.style.backgroundColor = "#fff";
};
const genComChoice = () => {
    const options = ["rock", "paper", "sisseor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin == true) {
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.boxShadow = "0px 1px 34px green";
        userScore++;
        usSc.innerText = userScore;
        winnerAudio.play();
    } else {
        msg.innerText = `You lost! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.boxShadow = "0px 1px 34px red";
        compScore++;
        cpSc.innerText = compScore;
        loseAudio.play();
    }
};

const playGame = (userChoice) => {
    const comChoice = genComChoice();

    if (userChoice === comChoice) {
        msg.innerText = "Game Draw!";
        msg.style.backgroundColor = "#808080";
        msg.style.boxShadow = "0px 1px 34px #808080";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "sisseor" ? false : true;
        } else if (userChoice === "sisseor") {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choiecs.forEach((choiec) => {
    // console.log(choiec);
    choiec.addEventListener("click", () => {
        const userChoice = choiec.getAttribute("id");
        playGame(userChoice);
        clickAudio.play()
    });
});

reset.addEventListener("click", () => {
    resetGame();
});
