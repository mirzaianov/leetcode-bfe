const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>();

  for (const s of strs) {
    const key: string = s
      .split('')
      .sort((a, b) => (a < b ? 1 : -1))
      .join('');

    if (map.has(key)) {
      map.set(key, [...map.get(key)!, s]);
    } else {
      map.set(key, [s]);
    }
  }

  return [...map.values()];
};

export default groupAnagrams;
