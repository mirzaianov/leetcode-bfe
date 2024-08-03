const clearDigits = (s: string): string => {
  const arr: string[] = [];

  for (let i = 0; i < s.length; i += 1) {
    if (!Number.isNaN(Number(s[i]))) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  return arr.join('');
};

export default clearDigits;
