// Code Flow - Functions
var x = 5;                 // variable x is set to 5
    
function setX(newValue) {  //function setX is established with newValue as input parameter
    x = newValue;          // x is set to newValue
}
    
console.log(x);            // console log x -> 5   
setX(15);                  // setX function is called with newValue = 15  -> x is now 15
console.log(x);            // console log x-> 15


// The return of return
var x = 5;                            // variable x is set to 5
    
function addToX(amount) {             //function addToX is declared with amount as input variable
    return x + amount;                //returns x + amount;   removing return makes results = UNDEFINED
    console.log("hello there");       //since return is the first line of the function the following lines don't run
    //return x + amount;        
}
    
console.log(x);                        // 5
var result = addToX(-10);              //result = 5 - 10 = -5
console.log(result);                   //-5
console.log(x);                        //5

// Code Flow - Is the Array a Palindrome
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;             // left is variable being incremented, moves it to right to left
             // right = arr.length (5) - 1 - left (which is the index coming for left)
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);