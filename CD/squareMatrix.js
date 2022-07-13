// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3], //[r][c]
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    [0][0] , [1][1] , [2][2]
    right to left diagonal: 3 + 5 + 9 = 17
    [0][2] , [1][1], [2][0]
    absolute difference = 2
  */

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let rightToLeftSum = 0
    let leftToRightSum = 0

    for (let i = 0; i < sqrMatrix.length; i++) {
        leftToRightSum += sqrMatrix[i][i]
        rightToLeftSum += sqrMatrix[i][sqrMatrix.length-1-i]
    }

    return Math.abs(rightToLeftSum - leftToRightSum)

    // outer1 & inner1 -> pointers for index location
    //   let outer1 = 0;
    //   let inner1 = 0;
    //   let sum1 = 0;

    //   // right to left diagonal
    //   while (outer1 < sqrMatrix.length && inner1 < sqrMatrix.length) {
    //     sum1 += sqrMatrix[outer1][inner1];
    //     // starts at -v
    //     // sum1 += sqrMatrix[0][0]
    //     outer1++;
    //     inner1++;
    //   }

    //   let outer2 = 0;
    //   let inner2 = sqrMatrix.length - 1;
    //   let sum2 = 0;
    //   // left to right diagonal
    //   while (outer2 < sqrMatrix.length && inner2 >= 0) {
    //     sum2 += sqrMatrix[outer2][inner2];
    //     outer2++;
    //     inner2--;
    //   }
    //   const difference = Math.abs(sum1 - sum2);
    return difference;
}

console.log(diagonalDifference(squareMatrix1))