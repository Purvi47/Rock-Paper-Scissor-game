let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31"
}


const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win!,Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `Computer Win!,  ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "aqua";
        msg.style.color = "black"
    }
}
const playgame = (userchoice) => {
    //generate computer choice
    const compChoice = getCompChoice();
    if(userchoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};
 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userchoice = choice.getAttribute("id")
       console.log("Choice was clicked", userchoice);
       playgame(userchoice);
    });
});