// June 15, 2022
/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";  
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";  
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    var newArray = []
    var newDict = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for( var i = 0; i < str.length; i++) {
        if(str[i] === newDict[")"] || str[i] === newDict['}'] || str[i] === newDict[ ']' ] ) {
            newArray.push(str[i])
        }

        else if (str[i] in newDict){
            if(newArray.pop() != newDict[str[i]]) { 
                return false
            }
        }
    }
    if (newArray.length === 0){
        return true
    }

    else{
        return false 
    }
}

console.log("Output:" + bracesValid(str1))
console.log("Expected:" + expected1)
console.log("Output:" +bracesValid(str2))
console.log("Expected:" + expected2)
console.log("Output:" +bracesValid(str3))
console.log("Expected:" + expected3)
console.log(bracesValid("()()(((((())))))"))