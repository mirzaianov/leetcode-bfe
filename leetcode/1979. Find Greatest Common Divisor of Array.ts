const findGCD = (nums: number[]): number => {
  const min: number = Math.min(...nums);
  const max: number = Math.max(...nums);

  for (let i = min; i >= 1; i -= 1) {
    if (max % i === 0 && min % i === 0) return i;
  }

  return -1;
};

export default findGCD;
