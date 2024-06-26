const findKthLargest = (nums: number[], k: number): number => {
  const max: number = Math.max(...nums);
  const map = new Map<number, number>();

  for (const num of nums) {
    const curr: number = max - num;

    map.set(curr, map.get(curr)! + 1 || 1);
  }

  let count = 0;
  let i = 0;

  while (count < k) {
    count += map.get(i) || 0;
    i += 1;
  }

  return max - i + 1;
};
