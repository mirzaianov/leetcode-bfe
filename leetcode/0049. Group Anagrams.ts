const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const sortedStr: string = str
      .split('')
      .sort((a, b) => (a > b ? -1 : 1))
      .join('');

    if (map.has(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr)!, str]);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(['', ''])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
