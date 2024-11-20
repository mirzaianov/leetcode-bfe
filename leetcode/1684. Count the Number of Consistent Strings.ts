const countConsistentStrings = (allowed: string, words: string[]): number => {
  const pattern: RegExp = new RegExp(`^[${allowed}]*$`);

  return words.filter((w) => w.match(pattern)).length;
};

export default countConsistentStrings;
