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

var inorderTraversal = function (root) {
  const result = [];

  if (!root) return result;

  const stack = [];
  let curr = root;

  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }

  return result;
};
