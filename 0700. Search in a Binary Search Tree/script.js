var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  return searchBST(root.left, val) || searchBST(root.right, val);
};

var searchBST = function (root, val) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val === val) return current;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return null;
};
