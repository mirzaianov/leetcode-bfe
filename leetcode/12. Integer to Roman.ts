const intToRoman = (num: number): string => {
  const map = new Map<string, number>([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]);
  let res = '';

  for (const [key, value] of map) {
    const count: number = num / value;

    if (count >= 1) {
      res += key.repeat(count);
      num %= value;
    }
  }

  return res;
};

export default intToRoman;
