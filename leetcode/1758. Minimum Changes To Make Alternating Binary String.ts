const minOperations = (s: string): number => {
  const len: number = s.length;
  let count = 0;

  for (let i = 0; i < len; i += 1) {
    if (((i & 1) === 0 && s[i] === '0') || ((i & 1) === 1 && s[i] === '1')) count += 1;
  }

  return Math.min(count, len - count);
};

export default minOperations;
