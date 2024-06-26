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

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (!root) return null;

  if (root.val === val) return root;

  return searchBST(root.left, val) || searchBST(root.right, val);
};

export default searchBST;
