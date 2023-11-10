const tree2str = (root) => {
  if (!root) return '';

  const left = tree2str(root.left);
  const right = tree2str(root.right);

  return root.val + (left || right ? `(${left})` : '') + (right ? `(${right})` : '');
};
