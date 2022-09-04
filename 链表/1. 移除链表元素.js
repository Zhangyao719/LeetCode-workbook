import { ListNode, getListFromArray, getArrayFromList } from './utils.js'

// 方式一
/**
 * @param {ListNode} head 指针
 * @param {number} val
 * @return {ListNode}
 */

var removeElements1 = function (head, val) {
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

// 方法二： 虚拟头节点
function removeElements2(head, target) {
  // 添加虚拟头节点
  const dummyNode = new ListNode(0, head)

  let pre = dummyNode,
    cur = dummyNode.next
  while (cur) {
    if (cur.val === target) {
      pre.next = cur.next // 删除当前节点（上节点的指针指向下节点，跳过当前节点）
    } else {
      pre = cur // 上节点下移
    }
    cur = cur.next // 当前节点下移
  }
  return dummyNode.next
}

const head = getListFromArray([1, 2, 6, 3, 4, 5, 6])
const res = removeElements2(head, 6)
const arr = getArrayFromList(res)
console.log('🚀', arr)
