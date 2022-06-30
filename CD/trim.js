/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    var splitstring = str.split("")
    for (var i = 0; i < splitstring.length; i++ ) {
        if (splitstring[i] === " ") {
            splitstring.shift();
        } else {
            break
        } 
    }
    for (var j = splitstring.length-1; j>=0; j--) {
        if (splitstring[j] === " ") {
            splitstring.pop();
        } else {
            break
        } 
    } return splitstring.join("");
} 

console.log(trim(str1) )
console.log(trim(" hi there  ") )