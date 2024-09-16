let birthYear =2000;
let favoriteNumber=21;
const currentyear=2024;
let age =currentyear-birthYear

 if (age >= 0 && age <= 10) {
    console.log("You are a child.");
} else if (age >= 11 && age <= 17) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");}


if (age > favoriteNumber) {
    console.log("The greater number is: " + age);
} else {
    console.log("The greater number is: " + favoriteNumber);
}

// Kontrollera om favorittalet är udda eller jämnt
if (favoriteNumber % 2 === 0) {
    console.log("Your favorite number is an even number.");
} else {
    console.log("Your favorite number is an odd number.");}