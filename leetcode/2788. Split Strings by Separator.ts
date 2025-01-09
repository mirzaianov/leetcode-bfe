const splitWordsBySeparator = (words: string[], separator: string): string[] => {
  const res: string[] = [];

  while (words.length) {
    const word: string[] = words.shift()!.split(separator);

    res.push(...word);
  }

  return res.filter((item) => Boolean(item));
};

export default splitWordsBySeparator;
