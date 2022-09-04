/**
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  // 1. 声明双指针（当前节点和上个节点）
  let cur = head
  let pre = null
  let temp = null
  while (cur) {
    // 保存下个节点（因为待会儿当前cur节点要翻转了）
    temp = cur.next

    // 2. 将当前节点指针指向上一个节点 （翻转结束）
    cur.next = pre

    // 3. 节点继续往下走
    pre = cur // 上个节点往下走
    cur = temp // 当前节点往下走
  }
  return pre
}
