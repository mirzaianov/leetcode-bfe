const countGoodSubstrings = (s: string): number => {
  const target: number = 3;
  const set = new Set<string>();
  let left: number = 0;
  let right: number = 0;
  let count: number = 0;

  while (right < s.length) {
    const len: number = right - left + 1;

    if (!set.has(s[right]) && len <= target) {
      set.add(s[right]);

      if (len === target) {
        count += 1;
      }

      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return count;
};
