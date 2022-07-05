/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
  //declare temp variable for swapping
  var temp = 0;
  for(var i=0;i<nums.length;i++) {
    // slight optimization ( - i - 1) -> will still work with just nums.length
    for (var j = 0; j < nums.length - i - 1; j++) {
      //checks if index [j] is greater than the next index
      if (nums[j] > nums[j + 1]) {
        //swap locations
        //sets temp to nums[j]
        temp = nums[j];
        // set nums[j] to next index
        nums[j] = nums[j+1];
        //sets next index [j+1] to temp variable
        nums[j+1] = temp;
      }
    }
  } 
  //return sorted nums array
  return nums
}

console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));

// function recursiveBubbleSort ( nums, n = nums.length) {
//     if ( n == 1) {
//         return nums;
//     }
//     for ( var i = 0; i < n - 1; i++) {
//         if (nums[i] < nums[i + 1]) {
//             // javascript builtin to swap 
//             [nums[i],nums[i + 1]] = [nums[i+1],nums[i]];
//         }
//     }
// }