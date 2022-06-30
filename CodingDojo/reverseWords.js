/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    var newString = ""
    var temp = str.split(" ");
    for(var i =0; i<temp.length; i++){
        for(var j = temp[i].length - 1 ; j >= 0 ; j--){
            newString += temp[i][j];
        }
        newString += " ";
    } return newString;
}

// function contrario (str){
// var word = "";
// var newStr = "";

// for(var i = str.length-1; i >= 0; i--){
//   if(str[i] != " "){
//     word += str[i];
//   }
//   if(str[i] == " " || i == 0){
//     newStr = word + " " + newStr;
//     word = "";
//   }
// }
//   return newStr;
// }

// console.log(newStr1)



console.log(reverseWords1(str3))
