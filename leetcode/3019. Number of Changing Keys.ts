const countKeyChanges = (s: string): number => {
  s = s.toLowerCase();

  let count = 0;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] !== s[i - 1]) count += 1;
  }

  return count;
};

export default countKeyChanges;
