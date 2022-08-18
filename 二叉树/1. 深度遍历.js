// * 前序遍历
var preorderTraversal = function (root) {
    let res = []; // 用闭包进行存储结果

    function ergodic(root) {
        if (root === null) return;

        res.push(root); // 前序遍历从中间的父节点开始

        ergodic(root.left); // 递归左子树
        ergodic(root.right); // 递归右子树
    }

    ergodic(root); // 递归调用

    return res;
}

// * 中序遍历
var inorderTraversal = function (root) {

}

// * 后序遍历