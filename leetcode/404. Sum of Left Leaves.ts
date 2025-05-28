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

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  let sum = 0;

  const dfs = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;

    if (node.left && !node.left.left && !node.left.right) sum += node.left.val;

    return dfs(node.left) || dfs(node.right);
  };

  dfs(root);

  return sum;
};

export default sumOfLeftLeaves;
