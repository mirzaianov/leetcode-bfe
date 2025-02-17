const toMap = (letters: string[]): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of letters) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const kthDistinct = (arr: string[], k: number): string => {
  const arrMap: Map<string, number> = toMap(arr);
  let count = 0;

  for (const [key, value] of arrMap) {
    if (value === 1) {
      count += 1;

      if (count === k) {
        return key;
      }
    }
  }

  return '';
};

export default kthDistinct;
