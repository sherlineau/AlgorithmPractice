/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return 0;
    
    let leftSum = 0;
    let totalSum = 0;
    
    for (var j = 0; j < nums.length; j++) {
        totalSum += nums[j]
    }
    
    for (var i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i]
    }
    return -1;
};