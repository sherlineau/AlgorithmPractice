/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const twoNum1 = 0;
const twoExpected1 = 0;

const twoNum2 = 1;
const twoExpected2 = 1;

const twoNum3 = 2;
const twoExpected3 = 1;

const twoNum4 = 3;
const twoExpected4 = 2;

const twoNum5 = 4;
const twoExpected5 = 3;

const twoNum6 = 8;
const twoExpected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    var num = Math.floor(num);
    if ( num == 1 || num == 0 ) return num;
    if ( num < 0 ) return 0; 
    return fibonacci(num-1) + fibonacci(num - 2);
    // we need to find the sum of the two previous numbers, but we dont have those yet because we also need to find the fibonacci of those numbers
    // return [fibonacci of the number one "space" behind our input number]  PLUS  [fibonaci of the number TWO spaces behind our input number]  -> this will continue to loop until number reaches 1 or 0.  then addes everything together
}

// console.log(fibonacci(twoNum1))
// console.log(fibonacci(twoNum2))
// console.log(fibonacci(twoNum3))
// console.log(fibonacci(twoNum4))
// console.log(fibonacci(twoNum5))
// console.log(fibonacci(twoNum6))
// console.log(fibonacci(8.9))

function fibMemo ( n , memo = { 0:0, 1:1}) {
    if (n<0) {
        return null;
    }

    if (memo[n] !== undefined) {
        return memo[n]
    }

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
}

function fibIterative ( n ) {
    let base0 = 0;      
    let base1 = 1;
    let result = 0;

    for (let i = 0; i <= n; i++) {
        if ( i % 2 == 0 ) {
            base0 += base1;
            result = base0;
        }
        else {
            base1 += base0;
            result = base1;
        }
    } return result
}

console.log(fibIterative(5))