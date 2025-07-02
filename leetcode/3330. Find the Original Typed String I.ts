const possibleStringCount = (word: string): number => {
  let count = 1;

  for (let i = 1; i < word.length; i += 1) {
    if (word[i] === word[i - 1]) count += 1;
  }

  return count;
};

export default possibleStringCount;
