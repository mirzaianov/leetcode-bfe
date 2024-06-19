const lengthOfLongestSubstring = (s: string): number => {
  const set = new Set<string>();
  let max: number = 0;
  let left: number = 0;
  let right: number = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    } else {
      set.add(s[right]);
      max = Math.max(max, set.size);
      right += 1;
    }
  }

  return max;
};

export default lengthOfLongestSubstring;
