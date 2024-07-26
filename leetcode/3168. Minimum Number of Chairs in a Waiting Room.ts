const minimumChairs = (s: string): number => {
  let cur = 0;
  let max = 0;

  for (const l of s) {
    if (l === 'E') cur += 1;

    if (l === 'L') cur -= 1;

    max = Math.max(max, cur);
  }

  return max;
};

export default minimumChairs;
