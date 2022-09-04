// 两种循环实现方式
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 先判断是否是环形链表
var detectCycle = function (head) {
  if (!head || !head.next) return null

  // 快慢指针
  let slow = head.next,
    fast = head.next.next
  // fast 追赶 slow
  while (fast && fast.next && fast !== slow) {
    slow = slow.next
    fast = fast.next.next
  }

  // 循环结束后排除没有环的情况
  if (!fast || !fast.next) return null

  // 找环入口
  // 从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点。
  slow = head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

var detectCycle = function (head) {
  if (!head || !head.next) return null
  let slow = head.next,
    fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}
