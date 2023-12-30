const lastVisitedIntegers = (words: string[]): number[] => {
  const numbers: number[] = [];
  let i: number;

  const res: number[] = [];

  for (const word of words) {
    if (word === 'prev') {
      res.push(numbers[i] || -1);
      i -= 1;
    } else {
      numbers.push(Number(word));
      i = numbers.length - 1;
    }
  }

  return res;
};
