const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const map = new Map<string, number>();

  for (const letter of ransomNote) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  for (const letter of magazine) {
    if (map.get(letter)) map.set(letter, map.get(letter)! - 1);
    if (map.get(letter) === 0) map.delete(letter);
    if (map.size === 0) return true;
  }

  return false;
};
