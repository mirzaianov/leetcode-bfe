const toMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) map.set(l, (map.get(l) || 0) + 1);

  return map;
};

const longestPalindrome = (s: string): number => {
  const mappedS: Map<string, number> = toMap(s);
  let count = 0;

  for (const [key, value] of mappedS) {
    if (value % 2 === 0) {
      count += value;
    } else if (value % 2 !== 0 && count % 2 === 0) {
      count += value;
    } else if (value % 2 !== 0) {
      count += value - 1;
    }
  }

  return count;
};

export default longestPalindrome;
