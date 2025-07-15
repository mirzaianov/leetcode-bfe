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

const reverseOddLevels = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  const dfs = (leftChild: TreeNode | null, rightChild: TreeNode | null, lvl: number): void => {
    if (!leftChild || !rightChild) return;

    if (lvl % 2 === 0) {
      [leftChild.val, rightChild.val] = [rightChild.val, leftChild.val];
    }

    dfs(leftChild.left, rightChild.right, lvl + 1);
    dfs(leftChild.right, rightChild.left, lvl + 1);
  };

  dfs(root.left, root.right, 0);

  return root;
};

export default reverseOddLevels;
