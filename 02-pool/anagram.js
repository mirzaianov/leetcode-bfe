const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  for (const l of t) {
    if (!map.get(l)) map.set(l, 1);
    else if (map.get(l) === 1) map.delete(l);
    else if (map.get(l) > 1) map.set(l, map.get(l) - 1);
  }

  if (map.size !== 0) return false;

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('a', 'ab')); // false
