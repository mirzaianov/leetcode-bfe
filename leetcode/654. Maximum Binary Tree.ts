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

const constructMaximumBinaryTree = (nums: number[]): TreeNode | null => {
  if (!nums.length) return null;

  const max: number = Math.max(...nums);
  const maxIndex: number = nums.indexOf(max);

  const root: TreeNode | null = new TreeNode(max);

  const leftArr: number[] = nums.slice(0, maxIndex);
  const rightArr: number[] = nums.slice(maxIndex + 1);

  root.left = constructMaximumBinaryTree(leftArr);
  root.right = constructMaximumBinaryTree(rightArr);

  return root;
};

export default constructMaximumBinaryTree;
