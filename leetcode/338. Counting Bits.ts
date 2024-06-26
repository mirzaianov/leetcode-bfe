const helper = (n: number): number => {
  let count = 0;

  while (n) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
};

const countBits = (n: number): number[] => {
  const res: number[] = [];

  for (let i = 0; i <= n; i += 1) res.push(helper(i));

  return res;
};

export default countBits;
