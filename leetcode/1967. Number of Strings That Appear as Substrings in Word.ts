const numOfStrings = (patterns: string[], word: string): number => {
  let count = 0;

  for (const pattern of patterns) {
    if (word.match(pattern)) count += 1;
  }

  return count;
};

export default numOfStrings;
