/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aaaaa";
const expected4 = "a";

const str5 = "banana";
const expected5 = "ban";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var temp = "";
    var result = {};
    for(var i=0; i<str.length; i++){
    var char = str[i];
        if(result[char]){
            result[char] ++;
        }
        else{
            result[char] = 1
            temp = temp + char;
        }
    }
return temp;
}


console.log(stringDedupe(str1));