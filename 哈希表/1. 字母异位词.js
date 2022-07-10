/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  // charCodeAt: 索引处元素对应的 UTF-16 代码单元 [0, 65535]整数
  const resSet = new Array(26).fill(0)
  const base = 'a'.charCodeAt()

  // 记录s中不同字母出现的次数:
  for (const i of s) {
    resSet[i.charCodeAt() - base]++
  }

  // 将t中的出现的字母记录下来, 拿过去和s进行比对核销:
  // 1. 如果该字母在s中没有出现过(因为s中若出现过该字母.则对应数组位置上的值 一定是 >=1), 直接返回false
  // 2. 如果出现过, 则将其核销(直至为0)。 若为0后, 再出现, 说明该字母出现次数不相等
  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) return false
    resSet[i.charCodeAt() - base]--
  }
  return true
}

console.log(isAnagram('aaaa', 'bbbb'))
