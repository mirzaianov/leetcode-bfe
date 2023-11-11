// const maxDepth = function (root) {
//     let result = 0,
//         number = root.length;

//     while (number > 1) {
//         number = number / 2;
//         result++;
//     }

//     return result;
// };

// const maxDepth = function (root) {
//   if (!root) return 0;

//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// #2

// const maxDepth = (root) => {
//   let max = 0;

//   const dfs = (node, lvl) => {
//     if (!node) return;

//     max = Math.max(max, lvl);

//     dfs(node.left, lvl + 1);
//     dfs(node.right, lvl + 1);
//   };

//   dfs(root, 1);

//   return max;
// };

const maxDepth = (root) => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
