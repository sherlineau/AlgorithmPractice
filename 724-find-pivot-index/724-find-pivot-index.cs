public class Solution {
    public int PivotIndex(int[] nums) {
        if (nums.Length == 0 ) return -1;
        if (nums.Length == 1 ) return 0;
        
        int leftSum = 0;
        int totalSum = 0;
        
        foreach (int num in nums)
        {
            totalSum += num;
        }
        
        for (int i = 0; i < nums.Length; i++)
        {
            if (leftSum == totalSum - leftSum - nums[i])
            {
                //returns the INDEX number -> i 
                return i;
            }
            leftSum +=  nums[i];
        }
        return -1;
    }
}

