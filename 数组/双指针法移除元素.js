/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
 */

/**
 * * 流程：
 * * 快指针负责查找元素；
 * * 慢指针只记录删除元素后的新数组下标；
 * * 快指针当前所查找的元素不满足产出条件时，继续往下寻找，而慢指针在此停留；
 * * 当遇到需要删除的元素时，则用后一位元素将其覆盖(删除)，此时慢指针前进一位。
 */

var removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        // 遇到需要保留的元素时，慢指针才会往前
        if(nums[i] != val) {
            nums[k++] = nums[i];
        }
    }
    return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([2], 3));