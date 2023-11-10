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

const postorderTraversal = (root) => {
  if (!root) return [];

  const leftValues = postorderTraversal(root.left);
  const rightValues = postorderTraversal(root.right);

  return [...leftValues, ...rightValues, root.val];
};
