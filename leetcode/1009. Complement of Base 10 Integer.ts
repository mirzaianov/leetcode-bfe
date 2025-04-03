const bitwiseComplement = (n: number): number => {
  let mask = 1;

  while (mask < n) {
    mask = (mask << 1) | 1;
  }

  return mask ^ n;
};

export default bitwiseComplement;
