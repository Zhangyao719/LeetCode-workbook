/**
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 *
 * 输入：head = [], val = 1
 * 输出：[]
 */

/**
 * @param {ListNode} head 指针
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const ret = new ListNode(0, head)
  let cur = ret
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
      continue
    }
    cur = cur.next
  }
  return ret.next
}
