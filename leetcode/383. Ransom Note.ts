const toMap = (string: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const letter of string) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  return map;
};

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const mappedR: Map<string, number> = toMap(ransomNote);
  const mappedM: Map<string, number> = toMap(magazine);

  for (const [key, value] of mappedR) {
    if (!mappedM.has(key) || mappedM.get(key)! < value) return false;
  }

  return true;
};

export default canConstruct;
