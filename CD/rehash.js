/* 
Given by Riot games.
*/
// b: 70
// a:184
// c:42
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    const dictionary = {}
    //dictionary to store key pairs, keys being letter, value being numbers

    let reHashed = ""

    for (let i = 0; i < s.length; i++) {
        let temp = ""
        // used to store the numbers 
        if (isNaN(s[i])) {
            //checks if position in string would return NaN is you used parseInt
            // if it does, then it checks whether the dictionary has seen that key before
            if (dictionary.hasOwnProperty(s[i])) {
                for (let j = i + 1; j < s.length + 1; j++) {
                    if (!isNaN(s[j])) {
                        temp += s[j]
                    }
                    else {
                        dictionary[s[i]] += parseInt(temp)
                        break
                    }
                }
            } else {
                dictionary[s[i]] = 0
                for (let j = i + 1; j < s.length; j++) {
                    if (!isNaN(s[j])) {
                        temp += s[j]
                        //console.log(temp)
                    }
                    else {
                        dictionary[s[i]] += parseInt(temp)
                        break
                    }
                }
            }
        }
        // whether it has or not, it's going to start a second loop until it finds the next
        // NaN, adding the numbers it sees to temp, and then when it finds NaN it updates
        // the key value pair by using parseInt. and breaks inner for loop

    }
    let orderedKeys = Object.keys(dictionary).sort();
    for (key of orderedKeys) {
        reHashed += key + dictionary[key]
    }

    return reHashed

}
console.log("--rehash--")
console.log(rehash(str1))