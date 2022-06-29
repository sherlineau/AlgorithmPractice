
/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, startIndex, endIndex, searchNum) {
    //gets middle index of section of array
    if ( endIndex >= startIndex) {
        let mid = 1 + Math.floor((endIndex - 1)/2);

        //if the middle index is equal to our search number, return true
        if (sortedNums[mid] == searchNum) {
            return true;
        }

        //if middle index is greater than search number return recursive function and search for the left side of array -> passed parameters startIndex is the same [0] endIndex is set to mid - 1
        if (sortedNums[mid] > searchNum) {
            return binarySearch(sortedNums,startIndex, mid - 1, searchNum)
        }

        // else search in right side of array
        // startIndex is set to mid + 1
        // endIndex is same [array length]
        return binarySearch(sortedNums, mid + 1, endIndex, searchNum)


    } return false

}

console.log(binarySearch(nums1,0,nums1.length, searchNum1))
console.log(binarySearch(nums2,0,nums2.length, searchNum2))
console.log(binarySearch(nums3,0,nums3.length, searchNum3))

