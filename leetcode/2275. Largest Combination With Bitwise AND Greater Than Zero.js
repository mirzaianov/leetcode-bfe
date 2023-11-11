const largestCombination = (candidates) => {
  let max = -Infinity;

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i *= 2) {
    let bit = 0;

    for (const el of candidates) {
      if ((el & i) !== 0) bit += 1;
    }

    max = Math.max(max, bit);
  }

  return max;
};

console.log(largestCombination([16, 17, 62, 24]));
