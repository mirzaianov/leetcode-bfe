const hammingDistance = (x: number, y: number): number => {
  let count = 0;
  let xor: number = x ^ y;

  while (xor) {
    if (xor & 1) count += 1;

    xor >>= 1;
  }

  return count;
};

export default hammingDistance;
