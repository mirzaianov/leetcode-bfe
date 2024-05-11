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

const isValidBST = (root: TreeNode | null): boolean => {
  const valid = (node: TreeNode | null, left: number, right: number): boolean => {
    if (!node) return true;

    if (node.val >= right || node.val <= left) return false;

    return valid(node.left, left, node.val) && valid(node.right, node.val, right);
  };

  valid(root, -Infinity, Infinity);
};

export default isValidBST;
