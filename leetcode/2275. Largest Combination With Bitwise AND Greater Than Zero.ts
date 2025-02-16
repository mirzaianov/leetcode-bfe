const largestCombination = (candidates: number[]): number => {
  let max = -Infinity;

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i *= 2) {
    let bits = 0;

    for (const num of candidates) {
      if (num & i) bits += 1;
    }

    max = Math.max(max, bits);
  }

  return max;
};

export default largestCombination;
