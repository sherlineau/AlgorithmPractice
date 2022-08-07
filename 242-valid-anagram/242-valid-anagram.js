/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    //create a hash map of first string
    let hash = {}
    for (let letter of s)
        {
            if (!hash[letter])
                {
                    hash[letter] = 1
                }
            else {
                hash[letter]++
            }
        }
    
    // iterate through second string 
    for (let letter of t)
        {
            // if a letter is found that is not in the hash map, return false
            if(!hash[letter])
                {
                    return false
                }
            // otherwise decrement the value 
            else
                {
                    hash[letter]--
                }
        }
    
    // check the hash map
    for (let obj in hash)
        {
            // if any letter in the hash map is not zero, return false
            if(hash[obj] !== 0)
                {
                    return false
                }
        }
    // return true at end of function -> since false is returned if any extra letter is found or the hashmap is not "empty"
    return true
};