function multiplyByselfe(nummer,) {
    return nummer*nummer;

}
console.log(multiplyByselfe(4));

//
function sum(nummer1 , nummer2){
    return (nummer1+nummer2) /2;
}
console.log(sum(2,6));

//
function Namn(firstNamn,lastNamn){
    let greeting =" Welcome" + firstNamn + " " + lastNamn;
    return greeting;
}
console.log(Namn( " Ben" , " Ting"));

//
function rondomNumber(max){
    return Math.floor(Math.random() * 6);

}
console.log(rondomNumber());

//
function convertnumbertsToletters(number){
    if (number === 0){
        return "bothe nuimber is equal";
    }
    else if (number === 1){
        return "first number is greater";
    }
    else if (number === 2){
        return "second number is greater";
    }
}
console.log(convertnumbertsToletters(0))
//

function evaluateResult(firstnumber, secondnumber){
    if (firstnumber === secondnumber){
        return " both numbers are equal";
    }
    else if (firstnumber > secondnumber){
        return "first number is greater";
    }
    else if (firstnumber < secondnumber){
        return "second number is greater";
    }

}
console.log(evaluateResult(4,1))

//
function evaluateResult(firstnumber, secondnumber){
    if (firstnumber === secondnumber){
        return " both numbers are equal";
    }
    else if (firstnumber > secondnumber){
        return "first number is greater";
    }
    else if (firstnumber < secondnumber){
        return "second number is greater";
    }

}
console.log(evaluateResult(1,2))
