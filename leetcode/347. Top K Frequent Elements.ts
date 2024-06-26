const topKFrequent = (nums: number[], k: number): number[] => {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const arr: number[][] = [];

  for (const [key, value] of map) {
    arr.push([value, key]);
  }

  arr.sort((a, b) => b[0] - a[0]);

  const res: number[] = [];

  for (let i = 0; i < k; i += 1) {
    res.push(arr[i][1]);
  }

  return res;
};

export default topKFrequent;
