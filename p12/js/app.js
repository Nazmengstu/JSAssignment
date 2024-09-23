// i will roll 10 000 numbers between 0-10
// i roll 0 a total of 987 times
//........1 .........1002....
//.........2.........998

//Create new HTML Project named P12Arrays○Create an array to count the occurrences of random numbers
// ○Roll 10 000 times for a number between 0 and 10 by using:■Math.floor(Math.random() * 11);
// ○And count the number of times that you have rolled that specific number○Afterwards,
// print the result to the console.

let randomNumberCount=[0,0,0,0,0,0,0,0,0,0];
// use a for loop to write into an array

for (let i = 0; i < 10000; i++) {
  let randomNumber=getRandomInt(10);
  randomNumberCount[randomNumber] +=1
}
console.log(randomNumberCount);
// user a for loop to read a value in an array
for (let i = 0; i < randomNumberCount.length; i++) {
  console.log("I rolled" + " " + randomNumberCount[i] + " " + "times");
}
function getRandomInt( max) {
  return Math.floor(Math.random() * max);
}
