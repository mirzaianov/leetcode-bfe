const mergeAlternately = (word1: string, word2: string): string => {
  const len: number = word1.length > word2.length ? word1.length : word2.length;
  let res = '';

  for (let i = 0; i < len; i += 1) {
    res += word1[i] ?? '';
    res += word2[i] ?? '';
  }

  return res;
};

export default mergeAlternately;
