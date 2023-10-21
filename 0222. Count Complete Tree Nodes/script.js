const countNodes = (root) => {
  const leftDepth = (node) => {
    if (!node) return 0;

    return leftDepth(node.left) + 1;
  };

  const rightDepth = (node) => {
    if (!node) return 0;

    return rightDepth(node.right) + 1;
  };

  const traverse = (node) => {
    const leftLen = leftDepth(node);
    const rightLen = rightDepth(node);

    if (leftLen === rightLen) return 2 ** leftLen - 1;

    return traverse(node.left) + traverse(node.right) + 1;
  };

  return traverse(root);
};
