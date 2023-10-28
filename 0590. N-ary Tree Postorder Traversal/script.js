// const postorder = (root) => {
//   if (!root) return [];

//   const result = [];
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();

//     result.unshift(current.val);

//     for (const child of current.children) stack.push(child);
//   }

//   return result;
// };

const postorder = (root) => {
  const result = [];

  const dfs = (node) => {
    if (!node) return null;

    for (const child of node.children) dfs(child);

    result.push(node.val);
  };

  dfs(root);

  return result;
};
