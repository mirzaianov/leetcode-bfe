const findEvenNumbers = (digits: number[]): number[] => {
  const n: number = digits.length;
  const set = new Set<number>();

  for (let i = 0; i < n; i += 1) {
    if (digits[i] === 0) continue;

    for (let j = 0; j < n; j += 1) {
      if (j === i) continue;

      for (let k = 0; k < n; k += 1) {
        if (k === i || k === j) continue;

        if (digits[k] % 2 === 0) {
          const num: number = digits[i] * 100 + digits[j] * 10 + digits[k];

          set.add(num);
        }
      }
    }
  }

  return [...set.values()].sort((a, b) => a - b);
};

export default findEvenNumbers;
