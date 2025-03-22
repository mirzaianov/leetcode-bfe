const commonChars = (words: string[]): string[] => {
  const result: string[] = [];
  const fWord: string[] = words[0].split('');
  let newWords: string[] = [...words];

  for (const char of fWord) {
    if (newWords.every((word) => word.includes(char))) {
      result.push(char);
      newWords = newWords.map((word) => word.replace(char, ''));
    }
  }

  return result;
};

export default commonChars;
