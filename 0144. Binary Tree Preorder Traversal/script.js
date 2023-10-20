// const preorderTraversal = (root) => {
//   if (!root) return [];

//   const res = [];
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();

//     res.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return res;
// };

const preorderTraversal = (root) => {
  if (!root) return [];

  const leftValues = preorderTraversal(root.left);
  const rightValues = preorderTraversal(root.right);

  return [root.val, ...leftValues, ...rightValues];
};
