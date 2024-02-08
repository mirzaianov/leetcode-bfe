const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const toMap = (string: string): Map<string, number> => {
    const map = new Map<string, number>();

    for (const letter of string) {
      map.set(letter, (map.get(letter) || 0) + 1);
    }

    return map;
  };

  const sToMap = toMap(s);
  const tToMap = toMap(t);

  for (const [key, value] of sToMap) {
    if (tToMap.get(key) !== value) return false;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
