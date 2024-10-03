const getLongestSubsequence = (words: string[], groups: number[]): string[] => {
  const res: string[] = [words[0]];

  for (let i = 1; i < groups.length; i += 1) {
    if (groups[i] !== groups[i - 1]) res.push(words[i]);
  }

  return res;
};

export default getLongestSubsequence;
