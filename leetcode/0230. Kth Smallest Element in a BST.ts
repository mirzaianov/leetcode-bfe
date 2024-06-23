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

const kthSmallest = (root: TreeNode | null, k: number): number => {
  const res: number[] = [];

  const inorder = (node: TreeNode | null): void => {
    if (!node) return;

    inorder(node.left);

    res.push(node.val);

    inorder(node.right);
  };

  inorder(root);

  return res[k - 1];
};

export default kthSmallest;
