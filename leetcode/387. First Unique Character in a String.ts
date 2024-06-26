const firstUniqChar = (s: string): number => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) return s.indexOf(key);
  }

  return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1
