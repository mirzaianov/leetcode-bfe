var increasingBST = function (root) {
  const result = new TreeNode();
  let current = result;

  recursion(root);

  return result.right;

  function recursion(node) {
    if (!node) return;

    recursion(node.left);

    current.right = new TreeNode(node.val);
    current = current.right;

    recursion(node.right);
  }
};
