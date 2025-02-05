const maximumValue = (strs: string[]): number => {
  let max = 0;

  for (const word of strs) {
    const num: number = Number(word);

    if (Number.isNaN(num)) {
      max = Math.max(max, word.length);
    } else {
      max = Math.max(max, num);
    }
  }

  return max;
};

export default maximumValue;
