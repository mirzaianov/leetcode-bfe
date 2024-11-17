const isAcronym = (words: string[], s: string): boolean => {
  const len: number = words.length;

  if (len !== s.length) return false;

  for (let i = 0; i < len; i += 1) {
    if (words[i][0] !== s[i]) return false;
  }

  return true;
};

export default isAcronym;
