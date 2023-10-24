// const findTarget = (root, k) => {
//   const set = new Set();
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();

//     const element = current.val;
//     const complement = k - element;

//     if (set.has(complement)) return true;

//     set.add(element);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return false;
// };

const findTarget = (root, k) => {
  const set = new Set();
  let status = false;

  const dfs = (node, target) => {
    if (!node) return;

    const element = node.val;
    const complement = target - element;

    if (set.has(complement)) status = true;

    set.add(element);

    return dfs(node.left, target) || dfs(node.right, target);
  };

  dfs(root, k);

  return status;
};
