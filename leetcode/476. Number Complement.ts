const findComplement = (num: number): number => {
  let mask = 1;

  while (mask < num) {
    mask = (mask << 1) | 1;
  }

  return num ^ mask;
};

export default findComplement;
