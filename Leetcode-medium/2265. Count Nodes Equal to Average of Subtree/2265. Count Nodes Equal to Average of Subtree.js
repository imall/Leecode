class TreeNode {
    constructor(val) {
        this.right = null;
        this.val = val;
        this.left = null;
    }
}


export const averageOfSubtree = function (root) {
    let ans = 0;
    const dfs = (node) => {
        if (node === null) return [0, 0];
        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);
        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;
        if (Math.floor(sum / count) === node.val) ans++;
        return [sum, count];

    }
    dfs(root)
    return ans;
};



