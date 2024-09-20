//Document Elements
// variable texstField0, looks for "text"
const textField0= document.getElementById("text0");

// Buttons
const increaseScoreButton=document.getElementById("button0");
// Internal Variable
let score =0;



// Process ( what is going to happen in what sequence?
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();

});

// Controllers section
function increaseScoreByOne() {
  score++;

}

function checkScoreForSeven() {
  if (score>=7){
changScoreTextColorToGreen();
  }
}

// View
function updateScoreText() {
  textField0.innerHTML = "your score is : " + score;
}
 function changScoreTextColorToGreen() {
  textField0.style.color = "green";
 }
