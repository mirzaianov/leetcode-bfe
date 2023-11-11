// var inorderTraversal = function (root) {
//   let result = [];

//   function inorder(root) {
//     if (!root) return;

//     inorder(root.left);
//     result.push(root.val);
//     inorder(root.right);
//   }

//   inorder(root);
//   return result;
// };

// var inorderTraversal = function (root) {
//   const result = [];

//   if (!root) return result;

//   const stack = [];
//   let curr = root;

//   while (curr || stack.length) {
//     if (curr) {
//       stack.push(curr);
//       curr = curr.left;
//     } else {
//       curr = stack.pop();
//       result.push(curr.val);
//       curr = curr.right;
//     }
//   }

//   return result;
// };

// #2

const inorderTraversal = function (root) {
  const res = [];

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return res;
};
