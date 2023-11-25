const constructMaximumBinaryTree = (nums) => {
  if (!nums.length) return null;

  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);

  const root = new TreeNode(max);

  const leftArr = nums.slice(0, maxIndex);
  const rightArr = nums.slice(maxIndex + 1);

  root.left = constructMaximumBinaryTree(leftArr);
  root.right = constructMaximumBinaryTree(rightArr);

  return root;
};
