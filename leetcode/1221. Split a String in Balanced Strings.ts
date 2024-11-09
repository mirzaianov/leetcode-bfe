const balancedStringSplit = (s: string): number => {
  let watch = 0;
  let count = 0;

  for (const l of s) {
    if (l === 'R') watch += 1;
    if (l === 'L') watch -= 1;
    if (watch === 0) count += 1;
  }

  return count;
};

export default balancedStringSplit;
