const minBitFlips = (start: number, goal: number): number => {
  let xor: number = start ^ goal;
  let count = 0;

  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }

  return count;
};

export default minBitFlips;
