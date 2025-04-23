const equalFrequency = (word: string): boolean => {
  const map = new Map<string, number>();

  for (const letter of word) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  let res = false;

  for (const [key, value] of map) {
    const newMap = new Map<string, number>(map);

    value === 1 ? newMap.delete(key) : newMap.set(key, newMap.get(key) - 1);

    if (new Set([...newMap.values()]).size === 1) res = true;
  }

  return res;
};

export default equalFrequency;
