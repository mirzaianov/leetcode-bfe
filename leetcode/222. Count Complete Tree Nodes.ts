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

const leftDepth = (node: TreeNode | null): number => {
  if (!node) return 0;

  return leftDepth(node.left) + 1;
};

const rightDepth = (node: TreeNode | null): number => {
  if (!node) return 0;

  return rightDepth(node.right) + 1;
};

const traverse = (node: TreeNode | null): number => {
  if (!node) return 0;

  const leftLen: number = leftDepth(node);
  const rightLen: number = rightDepth(node);

  if (leftLen === rightLen) return 2 ** leftLen - 1;

  return traverse(node.left) + traverse(node.right) + 1;
};

const countNodes = (root: TreeNode | null): number => traverse(root);

export default countNodes;
