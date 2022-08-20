// * 前序遍历:
var preorderTraversal = function (root, res = []) {
  if (!root) return res

  // 栈：先进后出
  const stack = [root]
  let currNode = null

  while (stack.length) {
    // 出栈：pop(中 -> 左 -> 右) 后进的先取出
    currNode = stack.pop()
    res.push(currNode.val)

    // 入栈：push(右 -> 左) 右边先进，确保左边先出
    currNode.right && stack.push(currNode.right)
    currNode.left && stack.push(currNode.left)
  }
  return res
}

// * 中序遍历:
// 入栈 左 -> 右
// 出栈 左 -> 中 -> 右
var inorderTraversal = function (root, res = []) {
  const stack = []
  let currNode = root

  while (stack.length || currNode) {
    console.log('currNode', currNode)

    // 如果有节点，一直往下取左子树（此时不取值）
    if (currNode) {
      stack.push(currNode) // 暂存当前节点(方便回退时，再取出来)
      currNode = currNode.left // 取左子树
    } else {
      // 如果节点没有了，则返回上一个节点
      currNode = stack.pop() // 返回上一节点
      res.push(currNode.val) // 存中值(符合中序遍历的特点)

      currNode = currNode.right // 取右子树
    }
  }
  return res
}
