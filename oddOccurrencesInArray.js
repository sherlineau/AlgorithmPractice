/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(arr) {
    let output = {};
    for (let i = 0; i < arr.length; i++) {
        if(output[arr[i]]) {
            output[arr[i]]++;
        } else {
            output[arr[i]] = 1
        }
    }

    for ( key in output) {
        if (output[key] % 2 == 1) {
            return key
        } 
    }
}

console.log("Output:", oddOccurrencesInArray(nums1), "Expected:", expected1);
console.log("Output:", oddOccurrencesInArray(nums2), "Expected:", expected2);
console.log("Output:", oddOccurrencesInArray(nums3), "Expected:", expected3);
console.log("Output:", oddOccurrencesInArray(nums4), "Expected:", expected4);
