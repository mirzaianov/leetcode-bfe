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

// const inorderTraversal = (root: TreeNode | null): number[] => {
//   if (!root) return [];

//   const leftValues = inorderTraversal(root.left);
//   const rightValues = inorderTraversal(root.right);

//   return [...leftValues, root.val, ...rightValues];
// };

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const res: number[] = [];
  const stack: (TreeNode | null)[] = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop()!;
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};

export default inorderTraversal;
