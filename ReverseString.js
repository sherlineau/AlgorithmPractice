
/* 1 . write function that will take a string and reverse 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
*/

const str1 = "creature";
// const expected1 = "erutaerc";

const str2 = "dog";
// const expected2 = "god";

const str3 = "hello";
// const expected3 = "olleh";

const str4 = "";
// const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */


function reverseString(str) {
    var newString = "";
    //iterates BACKWARDS through a string and adds the index to a newstring
    for (var i = str.length -1         ;       i >= 0                      ; i--) {
        //   i = strings length - 1    condition to continue loop    decrements since we want to go backwards
        newString += str[i];
    }

    return newString;
}

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));

