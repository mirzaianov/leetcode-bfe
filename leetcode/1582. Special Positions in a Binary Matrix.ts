const canMakeArithmeticProgression = (arr: number[]): boolean => {
  if (arr.length < 3) return true;

  const sortedArr: number[] = [...arr].sort((a, b) => a - b);
  const diff: number = sortedArr[1] - sortedArr[0];

  for (let i = 2; i < sortedArr.length; i += 1) {
    if (sortedArr[i] - sortedArr[i - 1] !== diff) return false;
  }

  return true;
};

export default canMakeArithmeticProgression;
