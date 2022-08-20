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

