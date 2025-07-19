const rearrangeArray = (nums: number[]): number[] => {
  const pos: number[] = [];
  const neg: number[] = [];
  const res: number[] = [];

  for (const n of nums) {
    n < 0 ? neg.push(n) : pos.push(n);
  }

  for (let i = 0; i < pos.length; i += 1) {
    res.push(pos[i], neg[i]);
  }

  return res;
};

export default rearrangeArray;
