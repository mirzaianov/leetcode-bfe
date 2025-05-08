class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const findTilt = (root: TreeNode | null): number => {
  let sum = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left: number = dfs(node.left);
    const right: number = dfs(node.right);

    sum += Math.abs(left - right);

    return node.val + left + right;
  };

  dfs(root);

  return sum;
};

export default findTilt;
