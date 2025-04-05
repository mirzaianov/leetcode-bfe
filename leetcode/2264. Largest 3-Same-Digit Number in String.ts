const largestGoodInteger = (num: string): string => {
  let max = '';

  for (let i = 0; i < num.length - 2; i += 1) {
    const curr: string = num.substring(i, i + 3);
    const isEqualLetters: boolean = new Set([...curr]).size === 1;

    if (isEqualLetters && curr > max) {
      max = curr;
    }
  }

  return max;
};

export default largestGoodInteger;
