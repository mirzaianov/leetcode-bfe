const findXSum = (nums: number[], k: number, x: number): number[] => {
  const res: number[] = [];

  for (let i = 0; i < nums.length - k + 1; i += 1) {
    const map = new Map<number, number>();

    for (const n of nums.slice(i, i + k)) {
      map.set(n, (map.get(n) || 0) + 1);
    }

    const arr: number[][] = [...map.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    let sum = 0;

    for (let j = 0; j < x; j += 1) {
      if (arr[j] !== undefined) {
        const [key, value] = arr[j];

        sum += key * value;
      }
    }

    res.push(sum);
  }

  return res;
};

export default findXSum;
