/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numHash = {}
    for ( num of nums ) {
        if (!numHash[num]) {
            numHash[num] = 1
        } else {
            return true
        }
    } return false
};