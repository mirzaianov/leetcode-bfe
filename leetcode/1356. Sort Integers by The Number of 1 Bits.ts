const bits = (num: number): number => {
  let n: number = num;
  let count = 0;

  while (n) {
    count += n & 1;
    n >>= 1;
  }

  return count;
};

const sortByBits = (arr: number[]): number[] => arr.sort((a, b) => bits(a) - bits(b) || a - b);

export default sortByBits;
