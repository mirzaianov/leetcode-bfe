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

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  let count = 0;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    if (node.val < low) {
      dfs(node.right);
    } else if (node.val > high) {
      dfs(node.left);
    } else {
      count += node.val;
      dfs(node.left);
      dfs(node.right);
    }
  };

  dfs(root);

  return count;
};

export default rangeSumBST;
