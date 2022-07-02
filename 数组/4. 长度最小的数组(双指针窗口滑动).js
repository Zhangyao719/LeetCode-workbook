/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 * 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */
 var minSubArrayLen = function(target, nums) {
    const numsLength = nums.length;
    let left = right = sum = 0,
        len = numsLength + 1; // 子序列最大不会超过自身( + 1 是应对没有符合条件的子数组，直接跳出返回0)

    while(right < numsLength) {
        sum += nums[right++];

        // 当 sum ≥ s 后，开始逐步右移，寻找最小范围
        while (sum >= target) {
            const subLen = right - left; // 当前 子序列 区间范围(right 上一步已经++了，这里无需再 +1)
            len = len < subLen ? len : subLen; // 确定子序列范围
            sum -= nums[left++]; // 子序列左边界右移
        }
    }
     return len > numsLength ? 0 : len;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // output 2
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1,1,1,1])); // output 11
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // output 0