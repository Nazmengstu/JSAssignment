//Variables
//Buttons

let button0=document.getElementById("button0");

let playerRollText=document.getElementById("playerRollText");
let AiRollText=document.getElementById("AiRollText");
let Evoluation=document.getElementById("result");
let playerScoreText=document.getElementById("playerScoreText");
let AiScoreText=document.getElementById("AiScoreText");

// text

// Data
let playerRoll=0;
let AiRoll=0;
let playerScore=0;
let AiScore=0;

// processes
button0.addEventListener("click",()=>{
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
});

// controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll =Math.floor(Math.random()* 6) + 1;
}
function getRandomNumberOneToSixForAi(){
  AiRoll =Math.floor(Math.random() * 6) + 1;
}



// Views
function showPlayerRollResult(){
  playerRollText.innerHTML=playerRoll;
}

function showAiRollResult(){
  AiRollText.innerHTML=AiRoll;
}


