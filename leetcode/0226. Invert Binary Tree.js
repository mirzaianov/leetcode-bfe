// const invertTree = function (root) {
//   if (!root) return root;

//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;

//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

// #2

// const invertTree = function (root) {
//   if (!root) return null;

//   [root.left, root.right] = [root.right, root.left];

//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

// #3

const invertTree = function (root) {
  if (!root) return null;

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};
