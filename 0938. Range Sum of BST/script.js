// var rangeSumBST = function (root, low, high) {
//   if (root === null) return [];

//   const values = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current.val >= low && current.val <= high) {
//       values.push(current.val);
//     }

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }

//   return values.reduce((acc, item) => acc + item, 0);
// };

const rangeSumBST = (root, low, high) => {
  if (!root) return 0;

  let sum = 0;

  if (low <= root.val && root.val <= high) sum += root.val;

  if (root.left) sum += rangeSumBST(root.left, low, high);
  if (root.right) sum += rangeSumBST(root.right, low, high);

  return sum;
};
