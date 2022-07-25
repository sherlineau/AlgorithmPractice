/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    // initialize hash for output
    const output = {}
    // keeps track of soldiers for each row
    let count = 0;
    /// nested for loop to check each index if is 1
    for (let i = 0; i < mat.length; i++) {
        for ( let j = 0; j < mat[i].length; j++) {
            if ( mat[i][j] === 1) {
                count++
            }
        }
        output[i] = count
        count = 0
    } 
    // sorts output object by key in ascending order
    // descending -> output[b] - output[a]
    const sorted = Object.keys(output).sort(function(a,b){return output[a] - output[b]})
    //returns array based on number of k
    return sorted.slice(0,k)
};