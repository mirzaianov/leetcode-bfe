const isSubstringPresent = (s: string): boolean => {
  const set = new Set<string>();

  for (let i = 0; i < s.length - 1; i += 1) {
    const curr: string = `${s[i]}${s[i + 1]}`;
    const target: string = `${s[i + 1]}${s[i]}`;

    if (curr === target || set.has(target)) return true;

    set.add(curr);
  }

  return false;
};

export default isSubstringPresent;
