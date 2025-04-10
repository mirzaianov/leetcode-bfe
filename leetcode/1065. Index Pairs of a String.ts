const indexPairs = (text: string, words: string[]): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < text.length; i += 1) {
    for (const word of words) {
      const end: number = i + word.length;

      if (text.slice(i, end) === word) {
        res.push([i, end - 1]);
      }
    }
  }

  return res.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};

export default indexPairs;
