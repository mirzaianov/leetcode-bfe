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

const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null => {
  if (!root) return null;

  if (p && p.val > root.val && q && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
  if (p && p.val < root.val && q && q.val < root.val) return lowestCommonAncestor(root.left, p, q);

  return root;
};

export default lowestCommonAncestor;
