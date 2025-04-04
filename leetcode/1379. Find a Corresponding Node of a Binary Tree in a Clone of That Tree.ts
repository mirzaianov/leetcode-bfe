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

const getTargetCopy = (
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null,
): TreeNode | null => {
  if (!original || !cloned || !target) return null;

  if (original === target) return cloned;

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};

export default getTargetCopy;
