const leafSimilar = (root1, root2) => {
  const values1 = [];
  const values2 = [];

  const setValues = (node, array) => {
    if (!node) return [];

    if (!node.left && !node.right) array.push(node.val);

    return setValues(node.left, array) && setValues(node.right, array);
  };

  setValues(root1, values1);
  setValues(root2, values2);

  if (values1.length !== values2.length) return false;

  for (let i = 0; i < values1.length; i += 1) {
    if (values1[i] !== values2[i]) return false;
  }

  return true;
};
