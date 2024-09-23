for (let i = 0; i < 13; i++) {
  console.log(getRandomInt(6) + 1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 1; i <= 1024; i *= 2) {
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}


//write a function that has 2 number as parameters and returns the first number to the power of the second number○Input: 4, 24○Output: 281474976710656

function power(firstNumber, exponent) {
  // here we cache the result
  let result= firstNumber;
  for (let i =1; i< exponent; i++) {
    //multyply the reult by the firstnumber
    result *= firstNumber
}
  return result;
}
 console.log(power(2, 3));
console.log(Math.pow(4,24));

//let numberOfbottles=10;
//console.log(`${numberOfbottles} green bottles hangning on the well, and if one green bottle should accidentlly fall, there will be ${--numberOfbottles} green bottles hanging on the wall.`);


for (let i = 12; i >= 0; i--) {
  console.log("There is " + i + " green bottles hanging on the well." + i + "green bottles hanging on the well" + " and if one green bottle should accidently fall there will be");
}
