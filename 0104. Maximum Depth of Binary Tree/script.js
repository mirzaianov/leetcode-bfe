// const maxDepth = function (root) {
//     let result = 0,
//         number = root.length;

//     while (number > 1) {
//         number = number / 2;
//         result++;
//     }

//     return result;
// };

const maxDepth = function (root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
