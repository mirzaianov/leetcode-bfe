const evenOddBit = (n: number): number[] => {
  let bits: number = n;
  let odd = 0;
  let even = 0;
  let i = 0;

  while (bits) {
    if (i & 1 && bits & 1) odd += 1;
    if (!(i & 1) && bits & 1) even += 1;

    i += 1;
    bits >>= 1;
  }

  return [even, odd];
};

export default evenOddBit;
