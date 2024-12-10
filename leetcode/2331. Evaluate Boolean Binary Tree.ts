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

const evaluateTree = (root: TreeNode | null): boolean => {
  if (!root) return false;
  if (root.val === 1) return true;
  if (root.val === 0) return false;
  if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right);

  return evaluateTree(root.left) && evaluateTree(root.right);
};

export default evaluateTree;
