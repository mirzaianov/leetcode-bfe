const repeatedCharacter = (s: string): string => {
  const set = new Set<string>();

  for (const l of s) {
    if (set.has(l)) return l;

    set.add(l);
  }

  return '-1';
};

export default repeatedCharacter;
