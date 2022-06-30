// Always isSunny

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
//Prediction:
//I should bring: sunglasses, a coat, and a smile!


// Prepare for downcount
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");
//Prediction
//10
//9
//8
//7
//6
//5
//4
//3
//ignition!
//1
//liftoff!


// Count positives
var numbers = [3, 4, -2, 7, 16, -8, 0];
var countPositives = 0;

// your code here!
function getPositives(arrayOfNumbers) {
    var temp = 0;
    for(var i = 0; i<arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i] > 0) {
            temp++;
        }
    }
    countPositives = temp;
    return countPositives;  //bug -> countPositivies is not reset so running functions multiple times will result in wrong number
}

getPositives(numbers);
console.log("there are " + countPositives + " positive values");

numbers.push(9);
getPositives(numbers);
console.log("there are " + countPositives + " positive values");

numbers.pop(9);
getPositives(numbers);
console.log("there are " + countPositives + " positive values");



