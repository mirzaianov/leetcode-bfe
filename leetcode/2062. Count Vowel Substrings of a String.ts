const countVowelSubstrings = (word: string): number => {
  const len: number = word.length;
  const vowels = new Set<string>(`aeiou`);
  const set = new Set<string>();
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    set.clear();

    if (vowels.has(word[i])) {
      set.add(word[i]);

      for (let j = i + 1; j < len; j += 1) {
        if (vowels.has(word[j])) {
          set.add(word[j]);

          if (set.size > 4) count += 1;
        } else {
          set.clear();
          break;
        }
      }
    }
  }

  return count;
};

export default countVowelSubstrings;
