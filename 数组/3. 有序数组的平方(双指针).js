/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序(递增) 排序。
 * 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
 * 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]
 */

const sortedSquares = function (nums) {
    let list = [];

    // 声明左右两个边界
    for (let i = 0, j = nums.length - 1; i <= j; ) {
        // 取元素的绝对值
        const left = Math.abs(nums[i]);
        const right = Math.abs(nums[j]);

        // 二分法两端对比
        if (right > left) {
            list.unshift(right ** 2);
            j--;
        } else {
            list.unshift(left ** 2);
            i++;
        }
    }
    return list;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// 暴力骚操作：
const sortedSquares1 = (nums) => (nums.map(item => item ** 2).sort((a, b) => a - b))
console.log(sortedSquares1([-4, -1, 0, 3, 10]));
