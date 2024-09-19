console.log("Hello World!");
const textField = document.getElementById("text0");
textField.innerHTML ="Nazret"
textField.style.fontSize = "30px"


const headerText = document.getElementById("header5");
headerText.innerHTML =" välkommen till min websida"
headerText.style.fontSize = "20px"




const buttonText = document.getElementById("button0");
buttonText.innerHTML =multiplyByselfe(88)



function multiplyByselfe(nummer,) {
  return nummer*nummer;

}
console.log(multiplyByselfe(4));
function sum(nummer1 , nummer2){
  return (nummer1+nummer2) /2;
}
console.log(sum(2,6));
