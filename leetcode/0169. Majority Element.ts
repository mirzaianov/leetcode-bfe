const majorityElement = (nums: number[]): number => {
  const lenHalf: number = nums.length / 2;
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num)! > lenHalf) return num;
  }

  return -1;
};

export default majorityElement;
