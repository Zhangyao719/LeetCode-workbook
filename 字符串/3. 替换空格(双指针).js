/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1： 输入：s = "We are happy."
 * 输出："We%20are%20happy."

 * @param {string} s
 * @return {string}
 */

var replaceSpace = function (s) {
  const strArr = Array.from(s) // 字符串转为数组 或者 s.split('')

  // 统计空格数量
  let count = 0
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      count++
    }
  }

  let left = strArr.length - 1 // 从后往前排序（好处： 1. 不用申请新数组。从后向前填充元素；2.避免每次添加元素都要将添加元素之后的所有元素向后移动。）
  let right = strArr.length + count * 2 - 1 // 扩充数组到每个空格替换成"%20"之后的大小。(一个空格多就两个)

  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0'
      strArr[right--] = '2'
      strArr[right--] = '%'
      left--
    } else {
      // 非空格成员 正常放入数组中
      strArr[right--] = strArr[left--]
    }
  }

  // 数组转字符串
  return strArr.join('')
}
