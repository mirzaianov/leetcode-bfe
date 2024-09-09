const isPrefixAndSuffix = (str1: string, str2: string): boolean => {
  const len1: number = str1.length;
  const len2: number = str2.length;

  if (len2 < len1) return false;

  const prefix: string = str2.slice(0, len1);
  const suffix: string = str2.slice(len2 - len1);

  return str1 === prefix && str1 === suffix;
};

const countPrefixSuffixPairs = (words: string[]): number => {
  let count = 0;

  for (let i = 0; i < words.length; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if (isPrefixAndSuffix(words[i], words[j])) count += 1;
    }
  }

  return count;
};

export default countPrefixSuffixPairs;
