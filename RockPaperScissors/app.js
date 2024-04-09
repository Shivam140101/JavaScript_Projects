let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score"); 

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const drawGame = () => {
  console.log("Game Draw ");
  msg.innerText = "Game Draw!!!";
  msg.style.backgroundColor = " #081b31";
};

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win");
    msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You Loose");
    msg.innerText = `You Loose!, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);

  // Generate Computer Choice
  const compChoice = genComputerChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Scissors , Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Rock , Scissors
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
