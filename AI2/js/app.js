let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let game=document.getElementById("game");
let AiChoice=0;
let val="";

button0.addEventListener("click", function(){HandlebuttonClick( "Rock");getRandomNumberForAI();choiceai()})
button1.addEventListener("click", function(){HandlebuttonClick( "Paper");getRandomNumberForAI();choiceai()})
button2.addEventListener("click", function(){HandlebuttonClick( "Siccor");getRandomNumberForAI();choiceai()})

function HandlebuttonClick(choice) {
  val = choice;
  // Directly display the player's choice in the HTML element
  document.getElementById('playerChoiceDisplay').innerHTML = `You chose: ${choice}`;
}




function getRandomNumberForAI(){
  AiChoice=Math.floor( Math.random() * 3 )+1;
}


//1=Siccor 2=Rock 3=Paper
function choiceai() {
  if (AiChoice == 1 && val=="Rock") {
    game.innerHTML = "You win, AI chose siccor"
  } else if (AiChoice == 1 && val=="Paper") {
    game.innerHTML = "You loose, AI chose siccor"
  }
  else if (AiChoice == 1 && val=="Siccor") {
    game.innerHTML = "Its a draw, AI chose siccor"
  }
  else if (AiChoice == 2 && val=="Rock") {
    game.innerHTML = "Its a draw, AI chose Rock"
  } else if (AiChoice == 2 && val=="Paper") {
    game.innerHTML = "You win, AI chose Rock"
  }
  else if (AiChoice == 2 && val=="Siccor") {
    game.innerHTML = "You loose, AI chose Rock"
  }

  else if (AiChoice == 3 && val=="Rock") {
    game.innerHTML = "You loose, AI chose Paper"
  } else if (AiChoice == 3 && val=="Paper") {
    game.innerHTML = "Its a draw, AI chose Paper"
  }
  else if (AiChoice == 3 && val=="Siccor") {
    game.innerHTML = "You win, AI chose Paper"
  }


  else {
    game.innerHTML = "Error"
  }
}

