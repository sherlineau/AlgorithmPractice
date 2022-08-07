/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
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
    for (let letter of t)
        {
            if(!hash[letter])
                {
                    return false
                }
            else
                {
                    hash[letter]--
                }
        }
    for (let obj in hash)
        {
            if(hash[obj] !== 0)
                {
                    return false
                }
        }
    return true
};