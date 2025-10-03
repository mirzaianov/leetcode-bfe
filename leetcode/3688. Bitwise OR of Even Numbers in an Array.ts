const evenNumberBitwiseORs = (nums: number[]): number => {
  let res = 0;

  for (const n of nums) {
    if (n % 2 === 0) {
      res |= n;
    }
  }

  return res;
};

export default evenNumberBitwiseORs;
