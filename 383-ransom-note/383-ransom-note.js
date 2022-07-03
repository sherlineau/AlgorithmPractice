/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mag_hash = {};
    // create a hash table of magazine input
    for (var i = 0; i < magazine.length; i++) {
        if(mag_hash[magazine[i]]) {
            mag_hash[magazine[i]]++;
        } else {
            mag_hash[magazine[i]] = 1;
        }
    }
    
    //iterate through ransomNote input
    for (var j=0; j < ransomNote.length; j++) {
        // if character at index j is not found in mag_hash return false
        if(!mag_hash[ransomNote[j]]) {
            return false;
        } 
        //is found -> decrements value of mag_hash[ransomNote character at index j]
        mag_hash[ransomNote[j]]--;
    } 
    return true;
};
