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

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const res: number[] = [];
  const stack: (TreeNode | null)[] = [root];

  while (stack.length) {
    const current: TreeNode | null = stack.pop()!;

    res.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return res;
};

// const preorderTraversal = (root: TreeNode | null): number[] => {
//   if (!root) return [];

//   const leftValues: number[] = preorderTraversal(root.left);
//   const rightValues: number[] = preorderTraversal(root.right);

//   return [root.val, ...leftValues, ...rightValues];
// };

export default preorderTraversal;
