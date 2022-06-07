var a = 25; 
a = a - 13; //25-13 = 12
console.log(a/2); // 12 / 2 = 6
    
a = "hello";
console.log(a + " hello");  //hello hello


for(var i=0; i<10; i++) {        
    console.log(i);         // i = 0 -> 0 + 3 = 3 -> 3++ -> 4       console.log   4
    i = i + 3;              // i = 4 -> 
}

console.log("outside of the loop " + i);
//0
//4
//8
//outside of the loop 12

function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];     //set sum = 0 instead to avoid the loop adding an extra number
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
    
    console.log("the total is: " + sum);
    
}

    getTotal([1, 3, 5]);

// the current sum is: 2
// the current sum is: 5
// the current sum is: 10
// the total is: 10    1+3+5 does not equal 10
