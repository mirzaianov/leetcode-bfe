const largestAltitude = (gain: number[]): number => {
  let curr = 0;
  let max = curr;

  for (const g of gain) {
    curr += g;
    max = Math.max(max, curr);
  }

  return max;
};

export default largestAltitude;
