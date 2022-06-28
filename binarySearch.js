/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
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

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 5, 6, 7, 8, 9, 4];
const searchNum4 = 2;
const expected4 = 4;


/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let startIndex = 0
    let endIndex = sortedNums.length - 1

    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex)/2);

        if(searchNum === sortedNums[middleIndex]) {
            return true
        }

        if (searchNum > sortedNums[middleIndex]) {
            startIndex = middleIndex + 1
        }

        if (searchNum < sortedNums[middleIndex] ) {
            endIndex = middleIndex - 1;
        } 
        else {
            continue
        }
    } return false
}

function sortArray (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        } 
    } return arr
}

console.log(binarySearch(nums1,searchNum1))
console.log(binarySearch(nums2,searchNum2))
console.log(binarySearch(nums3,searchNum3))
console.log(binarySearch(nums4,searchNum4))

num5=[4,1,1,7,9,2]
sortedArr = sortArray(num5)
console.log(binarySearch(sortedArr,1))