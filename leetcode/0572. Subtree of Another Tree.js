// const isSubtree = function (root, subRoot) {
//   if (!root) return false;

//   if (isSame(root, subRoot)) return true;

//   return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };

// function isSame(a, b) {
//   if (!a && !b) return true;

//   if ((!a && b) || (a && !b) || a.val !== b.val) return false;

//   return isSame(a.left, b.left) && isSame(a.right, b.right);
// }

// #2

const isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSame(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSame(a, b) {
  if (!a && !b) return true;

  if ((!a && b) || (a && !b) || a.val !== b.val) return false;

  return isSame(a.left, b.left) && isSame(a.right, b.right);
}
