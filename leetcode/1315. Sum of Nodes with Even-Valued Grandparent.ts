const sumEvenGrandparent = (root: TreeNode | null): number => {
  let sum = 0;

  const dfs = (node: TreeNode | null): void => {
    if (!node) return;

    if (node.val % 2 === 0) {
      if (node.left && node.left.left) sum += node.left.left.val;
      if (node.left && node.left.right) sum += node.left.right.val;
      if (node.right && node.right.left) sum += node.right.left.val;
      if (node.right && node.right.right) sum += node.right.right.val;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  return sum;
};
