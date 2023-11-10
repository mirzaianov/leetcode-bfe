const maxDepth = (root) => {
  if (!root) return 0;

  let max = 0;

  for (const child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};
