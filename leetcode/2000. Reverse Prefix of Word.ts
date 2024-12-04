const reversePrefix = (word: string, ch: string): string => {
  const idx = word.indexOf(ch);

  if (!idx) return word;

  const first: string = word
    .slice(0, idx + 1)
    .split('')
    .reverse()
    .join('');
  const second: string = word.slice(idx + 1);

  return `${first}${second}`;
};

export default reversePrefix;
