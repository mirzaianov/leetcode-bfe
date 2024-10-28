// Definition for a binary tree node.

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

const inOrder = (node: TreeNode | null): number[] => {
  if (!node) return [];

  return [...inOrder(node.left), node.val, ...inOrder(node.right)];
};

const constructTree = (values: number[]): TreeNode | null => {
  const len = values.length;

  if (!len) return null;

  const mid: number = Math.floor(len / 2);
  const root: TreeNode = new TreeNode(values[mid]);

  root.left = constructTree(values.slice(0, mid));
  root.right = constructTree(values.slice(mid + 1));

  return root;
};

const balanceBST = (root: TreeNode | null): TreeNode | null => constructTree(inOrder(root));

export default balanceBST;
