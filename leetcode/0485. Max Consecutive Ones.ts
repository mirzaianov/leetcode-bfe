const findMaxConsecutiveOnes = (nums: number[]): number => {
  let prev: number = 0;
  let acc: number = 0;

  for (const num of nums) {
    if (num === 0) acc = 0;

    acc += num;
    prev = Math.max(prev, acc);
  }

  return prev;
};
