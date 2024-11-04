const sumOfSquares = (nums: number[]): number => {
  const len: number = nums.length;
  let res = 0;

  for (let i = 0; i < len; i += 1) {
    if (len % (i + 1) === 0) res += nums[i] ** 2;
  }

  return res;
};

export default sumOfSquares;
