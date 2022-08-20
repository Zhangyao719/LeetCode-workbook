/**
 * 层序遍历一个二叉树。就是从左到右一层一层的去遍历二叉树。
 */

var levelOrder = function (root) {
  let res = [],
    queue = []
  queue.push(root)

  if (root === null) return res

  while (queue.length) {
    let length = queue.length // 记录当前层级节点数
    let curLevel = [] //存放每一层的节点

    // 循环当前层级的所有节点
    for (let i = 0; i < length; i++) {
      let node = queue.shift() // 取出并清空队列中这个节点
      curLevel.push(node.val)

      // 存放当前层下一层的节点
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    //把每一层的结果放到结果数组
    res.push(curLevel)
  }

  return res
}

// [1, 2, 3, 4, 5, 6, 7,]
const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
}
