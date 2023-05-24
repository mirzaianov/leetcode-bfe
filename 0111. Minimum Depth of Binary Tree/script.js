// const minDepth = function (root) {
//   if (root === null) return 0;

//   if (root.left === null) return minDepth(root.right) + 1;

//   if (root.right === null) return minDepth(root.left) + 1;

//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

// #2

const minDepth = function (root) {
  if (!root) return 0;

  if (!root.left) return minDepth(root.right) + 1;

  if (!root.right) return minDepth(root.left) + 1;

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
