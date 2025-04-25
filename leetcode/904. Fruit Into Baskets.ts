const totalFruit = (fruits: number[]): number => {
  const map = new Map<number, number>();
  let r = 0;
  let l = 0;
  let max = 0;

  while (r < fruits.length) {
    const right: number = fruits[r];
    const value: number | undefined = map.get(right);

    map.set(right, (value || 0) + 1);

    if (map.size > 2) {
      const left: number = fruits[l];
      let freq: number | undefined = map.get(left);

      if (freq !== undefined) {
        freq -= 1;
        freq ? map.set(left, freq) : map.delete(left);
        l += 1;
      }
    } else {
      max = Math.max(max, r - l + 1);
    }

    r += 1;
  }

  return max;
};

export default totalFruit;
