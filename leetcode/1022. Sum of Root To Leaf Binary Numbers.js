const sumRootToLeaf = (root) => {
  const arr = [];

  const dfs = (node, string) => {
    if (!node) return null;

    const str = `${string}${node.val}`;

    if (!node.left && !node.right) arr.push(str);

    return dfs(node.left, str) || dfs(node.right, str);
  };

  dfs(root, '');

  return arr.reduce((acc, item) => acc + parseInt(item, 2), 0);
};
