

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected5 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected6 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected7 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?). 0(n)
 * - Space: O(?). 
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  var temp = [] // hold the current num values being checked
  var rtStr = "";  // hold the return string

  if (nums.length < 2) return String(nums); //if nums is empty or only 

  for (var i = 0; i < nums.length; i++) {  //
    temp.push(nums[i]);            //Push current index of nums i
    if (nums[i]+1 == nums[i+1] ) {    //addes one to the value at index i and compares it to the next index
      temp.push(nums[i]);          //addes the i to last num of the 
    }
    else {
      if (temp.length < 2) {
        rtStr += nums[i] + ", ";
        temp = [];

      } else {
        rtStr += temp[0] + "-" + temp[temp.length-1] + ", ";
        temp = [];
      }
    }
  }
  return rtStr.substring(0,rtStr.length-2)
}  

console.log("Returned: " + bookIndex(nums1));
console.log("Expected: " + expected5);

console.log("Returned: " + bookIndex(nums2));
console.log("Expected: " + expected6);

// function bookIndex(nums) {
//   let temp_str = "";
//   for(let i = 0; i < nums.length; i++){
//       if(nums[i] === nums[i+1]-1 && nums[i] === nums[i-1]+1){ //checks to see if there are consecutive numbers to left and right
//           continue;
//       }
//       else if(nums[i] === nums[i+1]-1){ //checks to see if there is a cosecutive number to the right
//           temp_str += nums[i]; //adds "number-"
//           temp_str += "-";
//       }
//       else{
//           temp_str += nums[i]
//           if(i != nums.length-1){//checks to see if you are at the end of the list, so there isn't a hanging comma
//           temp_str += ", ";
//           }
//       }
//   }
//   return temp_str;
// }
