const binaryTreePaths = (root) => {
  const res = [];

  const dfs = (node, path = []) => {
    if (!node) return null;

    path.push(node.val);

    if (!node.left && !node.right) res.push(path.join('->'));

    dfs(node.left, path);
    dfs(node.right, path);

    path.pop();
  };

  dfs(root);

  return res;
};
