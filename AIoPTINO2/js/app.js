let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let Choice=["Rock", "Paper", "Siccors"]




button0.addEventListener("click", function() { HandlebuttonClick("Rock"); });
button1.addEventListener("click", function() { HandlebuttonClick("Paper"); });
button2.addEventListener("click", function() { HandlebuttonClick("Siccors"); });



function HandlebuttonClick(choice) {
  // Directly display the player's choice in the HTML element
  document.getElementById('playerChoiceDisplay').innerHTML = `You chose: ${choice}`;
}

function getRandomNumberForAI(){
  AiChoice=Math.floor( Math.random() * 3 );
}

function getRandomNumberForPlayer(){
  PlayerChoice=Math.floor( Math.random() * 3 );
}

function Play(){
  if AiChoice==PlayerChoice
    Resulte.innerHTML = "It's Draw"
else if (
  (PlayerChoice === 'rock' && AiChoice === 'scissors') ||
  (PlayerChoice === 'paper' && AiChoice === 'rock') ||
  (PlayerChoice === 'scissors' && AiChoice === 'paper')
) {
  return "You win!";
} else {
  return "AI wins!";
}}
