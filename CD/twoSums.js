// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

// BONUS 
const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == targetSum) {
                return [i, j]
                // dont we need to return the index value

            }

        }
    } return -1
}

console.log(twoSum(nums1, targetSum1))
console.log(twoSum(nums2, targetSum2))
console.log(twoSum(nums3, targetSum3))

function twoSum1(nums, targetSum) {
    let left = 0
    let right = nums.length - 1
    let tempSum
    while (left < right) {
        tempSum = nums[left] + nums[right]
        if (tempSum == targetSum) {
            return [left, right]
        }
        if (tempSum > targetSum) {
            right--
        } else {
            left++
        }
    } return ("Target sum not found")
}

console.log(twoSum1(nums1, targetSum1))




// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums4 = [1, 2, 1, 1, 2, 3]; // [1, 1, 1, 2, 2, 3]
const k1 = 2; // First 2 most frequent number
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 2, 0, 0, 2, 3]; // [0,0,0,2,2,3]
const k2 = 1; // most frequent number
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 1, 2, 3]; // [1, 1, 2, 2, 3, 3]
const k3 = 3;
// expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
//  */
// function kMostFrequent(nums, k) {
//     // initialize hash map
//     let num_map = {}
//     // iterates throug nums array
//     for (let i = 0; i < nums.length; i++) {
//         // if nums[i] exists in num_map -> value of that key increments
//         if (num_map[nums[i]]) {
//             num_map[nums[i]]++
//             // if nums[i] does not exist in num_map -> add it
//         } else {
//             num_map[nums[i]] = 1
//         }
//         // returns an array of the keys, slice the return by the number of keys we want [k], map changes the key strings into numbers

//         // need to sort values

//     }
//     const keys = [...Object.keys(num_map)]
//     keys.sort((numA, numB) => {
//         const freqA = num_map.get(numA)
//         const freqB = num_map.get(numB)
//         return freqB - freqA
//     })
//     return keys.slice(0, k)
// }


function kMostFrequentSort(nums, k) {
    const freq = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }

    const keys = [...freq.keys()];

    // sort gives us two elements side by side, A and B, a - b sorts ascending, b - a for descending
    keys.sort((numA, numB) => {
        const freqA = freq.get(numA);
        const freqB = freq.get(numB);
        return freqB - freqA;
    });

    // slice only the first k keys, if using a plain object for the freq table instead of the
    // built in Map object, would need to convert the keys back to ints, could do this with .map
    return keys.slice(0, k);
}

console.log(kMostFrequentSort(nums4, k1))
console.log(kMostFrequentSort(nums5, k2))
console.log(kMostFrequentSort(nums6, k3))
