// ex recursive repeat hello
// function repeatHelloRecursive ( n ) {
//     if (n === 1){
//         return "Hello\n";
//     }
//     else {
//         return "Hello\n" + repeatHelloRecursive(n-1);
//     }
// }

// console.log(repeatHelloRecursive(3))

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) { 
    if ( num <= 0) {
        return 0
    } else {
        num = Math.floor(num)
        return num + recursiveSigma(num-1)
    }
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
console.log(recursiveSigma(10))
