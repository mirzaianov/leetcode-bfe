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

// const postorderTraversal = (root) => {
//   if (!root) return [];

//   const res = [];
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();

//     res.unshift(current.val);

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }

//   return res;
// };

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const leftValues = postorderTraversal(root.left);
  const rightValues = postorderTraversal(root.right);

  return [...leftValues, ...rightValues, root.val];
};

export default postorderTraversal;
