const countPrefixes = (words: string[], s: string): number =>
  words.filter((item: string) => s.startsWith(item)).length;

export default countPrefixes;
