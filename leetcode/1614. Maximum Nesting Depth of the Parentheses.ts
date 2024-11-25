const maxDepth = (s: string): number => {
  let curr = 0;
  let max = 0;

  for (const l of s) {
    if (l === '(') {
      curr += 1;
      max = Math.max(max, curr);
    } else if (l === ')') {
      curr -= 1;
    }
  }

  return max;
};

export default maxDepth;
