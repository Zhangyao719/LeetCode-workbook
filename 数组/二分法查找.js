/**
 * * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// （版本一）左闭右闭区间
var search = function (nums, target) {
    // 区间 [l, r]
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = (l + r) >> 1; // 使用 右移操作符>> 取中位数
        if (nums[mid] === target) return mid;
        let isSmall = nums[mid] < target;
        l = isSmall ? mid + 1 : l;
        r = isSmall ? r : mid - 1; // 或者 r = isSmall ? r : mid; (mid 不会被取到)
    }
    return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([5], 5));