const romanToInt = (s: string): number => {
  const map = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    const curr: number = map.get(s[i]) || 0;
    const next: number = map.get(s[i + 1]) || 0;

    if (curr < next) {
      res -= curr;
    } else {
      res += curr;
    }
  }

  return res;
};

export default romanToInt;
