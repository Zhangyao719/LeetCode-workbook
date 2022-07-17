/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

var twoSum = function (nums, target) {
  // hash 对象用来保存nums中的值和其下标 { value： index }
    let hash = {}

  for (let i = 0; i < nums.length; i++) {
    // step2. 如果 target 减去 当前元素后的值 出现在hash对象中，说明这个值在nums数组中存在，就返回减数和差的下标。
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]]
    }

    // step1. 将当前元素的value和index保存起来
    hash[nums[i]] = i
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9));