/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
//     pointers for s
    let n = s.length, i = 0;
//     pointers for t
    let m = t.length, j = 0;
    
//     iterates through both loops -> loop is broken out of once string t has been checked, j >= length of t
    while ( i<n && j< m )
        {
            if (s[i] == t[j])
            {
                i++;
            }
            j++
        }
    return i == n;
    
};