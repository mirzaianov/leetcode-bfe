// var isUnivalTree = function(root) {
//   const value = root.val;

//   const dfs = (node, target) => {
//     if (!node) return true;

//     if (node.val !== target) return false;

//     return dfs(node.left, target) && dfs(node.right, target);
//   }

//   return dfs(root, value);
// };

const isUnivalTree = (root) => {
  const target = root.val;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();

    if (current.val !== target) return false;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return true;
};
