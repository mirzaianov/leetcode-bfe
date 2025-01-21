const lengthOfLongestSubstringKDistinct = (s: string, k: number): number => {
  let l = 0;
  let max = 0;
  const map = new Map<string, number>();

  for (let r = 0; r < s.length; r += 1) {
    const rChar = s[r];

    map.set(rChar, (map.get(rChar) || 0) + 1);

    while (map.size > k) {
      const lChar = s[l];
      const lCount = map.get(lChar) || 0;

      if (lCount > 1) {
        map.set(lChar, lCount - 1);
      } else {
        map.delete(lChar);
      }

      l += 1;
    }

    max = Math.max(max, r - l + 1);
  }

  return max;
};

export default lengthOfLongestSubstringKDistinct;

console.log(lengthOfLongestSubstringKDistinct('eceba', 2)); // 3
console.log(lengthOfLongestSubstringKDistinct('aa', 1)); // 2
