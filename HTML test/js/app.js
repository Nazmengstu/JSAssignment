// dociments we play with
// looks for "text0" Assignment that to the variable callet textFild0.
const textFeild0=document.getElementById("text0");
const increaseScoreButton = document.getElementById("button0");
// Internal variables
let score=0;
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByone();
  updateScoreText();
  checkScoreForSeven();
});

// controllers

 function increaseScoreByone(){
  score++;
 }

function checkScoreForSeven(){
   if (score >=7){
     changeScoreTextColorToGreen();
   }
}

 function changeScoreTextColorToGreen(){
   textFeild0.style.color = "green"
 }
// view
function updateScoreText() {
  textFeild0.innerHTML= " Your score is: " + score;
}

