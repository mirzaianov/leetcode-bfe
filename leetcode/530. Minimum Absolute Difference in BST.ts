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

const getMinimumDifference = (root: TreeNode | null): number => {
  let min = Infinity;
  let prev: TreeNode | null = null;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    dfs(node.left);

    if (prev) {
      min = Math.min(min, Math.abs(node.val - prev.val));
    }

    prev = node;
    dfs(node.right);
  };

  dfs(root);

  return min;
};

export default getMinimumDifference;
