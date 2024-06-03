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

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let diameter = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  };

  dfs(root);

  return diameter;
};

export default diameterOfBinaryTree;
