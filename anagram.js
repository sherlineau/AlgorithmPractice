/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    var string1 = {};
    var string2 = {};
    if (s1.length != s2.length) {
        return false;
    } else {    
        for (var i = 0; i < s1.length; i++) {
            if (string1[s1[i]] === undefined) {
                string1[s1[i]] = 1;
            } else {
                string1[s1[i]]++
            }    
        }
        for (var j = 0; j < s2.length; j++) {
            if (string2[s2[j]] === undefined) {
                string2[s2[j]] = 1;
            } else {
                string2[s2[j]]++
            }        
        }

        for (keys in string2) {
            if (string1[keys] !== string2[keys]) {
                return false
            } else {
                return true
            }
        }
        
    }

}

console.log(isAnagram(strA1,strB1))
console.log(isAnagram(strA2,strB2))
console.log(isAnagram(strB3,strA3))
console.log(isAnagram(strA4,strB4))
