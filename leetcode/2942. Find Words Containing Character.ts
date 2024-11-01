const findWordsContaining = (words: string[], x: string): number[] => {
  const res: number[] = [];

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].includes(x)) res.push(i);
  }

  return res;
};

export default findWordsContaining;
