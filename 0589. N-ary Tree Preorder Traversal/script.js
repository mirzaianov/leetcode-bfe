// const preorder = (root) => {
//   if (!root) return [];

//   const result = [];
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();

//     result.push(current.val);

//     const len = current.children.length;

//     for (let i = len - 1; i >= 0; i -= 1) {
//       stack.push(current.children[i]);
//     }
//   }

//   return result;
// };

const preorder = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) return null;

    result.push(node.val);

    for (const child of node.children) {
      dfs(child);
    }
  };

  dfs(root);

  return result;
};
