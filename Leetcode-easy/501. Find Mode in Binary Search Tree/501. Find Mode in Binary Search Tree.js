class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export var findMode = function (root) {

    let res = []
    let last = null
    let count = 0
    let max = 0

    function search(node) {
        if (!node) return

        search(node.left)

        if (node.val !== last) {
            last = node.val
            count = 1
            if (count > max) res.push(node.val)
        } else {
            count++
            if (count === max) res.push(node.val)
            if (count > max) {
                max = count
                res = [node.val]
            }
        }

        search(node.right)
    }
    search(root)
    return res.sort((a, b) => a - b)
};

// 創建測試用的二叉搜索樹
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.right = new TreeNode(2);

console.log(findMode(root1)); // 輸出 [1,2,3]

// const root2 = new TreeNode(1);
// root2.left = new TreeNode(1);
// root2.right = new TreeNode(2);
// root2.right.left = new TreeNode(2);

// console.log(findMode(root2)); // 輸出 [1, 2]

// const root3 = new TreeNode(3);
// root3.left = new TreeNode(1);
// root3.right = new TreeNode(5);
// root3.left.right = new TreeNode(3);
// root3.right.left = new TreeNode(5);

// console.log(findMode(root3)); // 輸出 [3, 5]

// const root4 = new TreeNode(1);
// root4.right = new TreeNode(1);

// console.log(findMode(root4)); // 輸出 [1]