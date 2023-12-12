public class Solution
{
    public int MaxProduct(int[] nums)
    {
        Array.Sort(nums);
        var max = nums[nums.Count() - 1];
        var lastmax = nums[nums.Count() - 2];
        return (max - 1) * (lastmax - 1);
    }
}