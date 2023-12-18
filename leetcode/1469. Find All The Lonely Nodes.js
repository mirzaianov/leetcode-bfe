const getLonelyNodes = (root) => {
  const res = [];

  const dfs = (node) => {
    if (!node) return null;

    if (!node.left && node.right) res.push(node.right.val);
    if (!node.right && node.left) res.push(node.left.val);

    return dfs(node.left) || dfs(node.right);
  };

  dfs(root);

  return res;
};
