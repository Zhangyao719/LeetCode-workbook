export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * 将一个数组转为链表
 * @param {Array<any>} a
 * @return {ListNode}
 */
export const getListFromArray = (a) => {
  let dummy = new ListNode()
  let pre = dummy
  a.forEach((x) => (pre = pre.next = new ListNode(x)))
  return dummy.next
}

/**
 * 将一个链表转为数组
 * @param {ListNode} node
 * @return {array}
 */
export const getArrayFromList = (node) => {
  let a = []
  while (node) {
    a.push(node.val)
    node = node.next
  }
  return a
}
