let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};


const drawGame = () => {
    console.log("game was draw");
    msg.innerText="This is a draw please try again.";
}


const showWinner = (userWin, userChoice, compChoice) => {
 if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you loose");
    msg.innerText=`you lose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
 }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice =genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper , scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});