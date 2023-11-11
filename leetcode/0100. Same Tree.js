// const isSameTree = function (p, q) {
//   if (!p && !q) return true;

//   if (!p || !q || p.val !== q.val) return false;

//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// #2

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
