/* 
  Recursively sum an arr of ints
*/

const twoNums1 = [1, 2, 3];
const twoExpected1 = 6;

const twoNums2 = [1];
const twoExpected2 = 1;

const twoNums3 = [];
const twoExpected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
// function sumArr(nums) {
//     if ( nums.length == 0) {
//         return 0
//     } else {
//         sum = nums[nums.length-1]
//         nums.pop()
//         return sum + sumArr(nums)
//         }


function sumArr(nums, index = 0) {
    if ( index == nums.length) {
        return 0;
    } else {
        return nums[index] + sumArr(nums, index + 1);
    }
}

console.log(sumArr(twoNums1))
console.log(sumArr(twoNums2))
console.log(sumArr(twoNums3))
