// var getTargetCopy = function (original, cloned, target) {
//   if (!cloned) return null;

//   if (cloned.val === target.val) return cloned;

//   return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target);
// };

// #2

const getTargetCopy = function (original, cloned, target) {
  if (!cloned) return null;

  if (target === original) return cloned;

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};
