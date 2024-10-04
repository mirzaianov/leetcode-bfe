const countMaxTarget = (s: string, t: string): number => {
  let max = 0;
  let count = 0;

  for (const l of s) {
    if (l === t) {
      count += 1;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
};

const checkZeroOnes = (s: string): boolean => {
  let maxOnes = countMaxTarget(s, '1');
  let maxZeros = countMaxTarget(s, '0');

  return maxOnes > maxZeros;
};

export default checkZeroOnes;
