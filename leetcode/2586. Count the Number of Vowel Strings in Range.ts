const isVowelString = (word: string): boolean => {
  const set = new Set<string>(['a', 'e', 'i', 'o', 'u']);

  if (!word.length) return false;

  if (set.has(word.at(0)!) && set.has(word.at(-1)!)) return true;

  return false;
};

const vowelStrings = (words: string[], left: number, right: number): number => {
  let count = 0;

  for (let i = left; i <= right; i += 1) {
    if (isVowelString(words[i])) count += 1;
  }

  return count;
};

export default vowelStrings;
