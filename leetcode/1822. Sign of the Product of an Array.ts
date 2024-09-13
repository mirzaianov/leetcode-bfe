const arraySign = (nums: number[]): number => {
  let sign = 1;

  for (const n of nums) {
    if (n === 0) return 0;
    else if (n < 0) sign *= -1;
    else if (n > 0) sign *= 1;
  }

  return sign > 0 ? 1 : -1;
};

export default arraySign;
