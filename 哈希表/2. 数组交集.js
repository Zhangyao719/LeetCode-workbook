/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输入: [1,2,2,1] [2,2]
 * 输出: [2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const filter = nums1.filter(item => nums2.includes(item));
    return Array.from(filter)
};

console.log(intersection([1,2,2,1], [2,2]));