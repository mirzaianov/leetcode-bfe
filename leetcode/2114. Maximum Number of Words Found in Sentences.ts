const mostWordsFound = (sentences: string[]): number => {
  let max = 0;

  for (const s of sentences) {
    const len: number = s.split(' ').length;

    max = Math.max(max, len);
  }

  return max;
};

export default mostWordsFound;
