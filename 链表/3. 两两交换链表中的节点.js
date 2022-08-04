/**
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 *
 * 输入：head = []
 * 输出：[]
 */

var swapPairs = function (head) {
  let ret = new ListNode(0, head),
    temp = ret
  while (temp.next && temp.next.next) {
    let cur = temp.next.next,
      pre = temp.next
    pre.next = cur.next
    cur.next = pre
    temp.next = cur
    temp = pre
  }
  return ret.next
}

console.log(swapPairs([1, 2, 3, 4]))
