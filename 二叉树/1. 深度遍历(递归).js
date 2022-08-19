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
    let res = [];

    function ergodic(root) {
        if (root === null) return;

        ergodic(root.left); // 中序遍历左子树开始
        res.push(root);
        ergodic(root.right);
    }

    ergodic(root);
}

// * 后序遍历
var postorderTraversal = function (root) {
    let res = [];

    function ergodic(root) {
        if (root === null) return;

        ergodic(root.left); // 后序遍历先从左右子树开始
        ergodic(root.right);
        res.push(root);
    }

    ergodic(root);
};