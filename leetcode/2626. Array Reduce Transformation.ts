type Fn = (accum: number, curr: number) => number;

const reduce = (nums: number[], fn: Fn, init: number): number => {
  if (!nums.length) return init;

  let res = init;

  for (const n of nums) {
    res = fn(res, n);
  }

  return res;
};

export default reduce;
