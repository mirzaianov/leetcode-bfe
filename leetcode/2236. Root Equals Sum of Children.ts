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

const checkTree = (root: TreeNode | null): boolean => {
  if (root && root.left && root.right) {
    return root.val === root.left.val + root.right.val;
  }

  return false;
};

export default checkTree;
