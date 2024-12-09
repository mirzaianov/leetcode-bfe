const missedDigits = (set1: Set<number>, set2: Set<number>): number[] => {
  const res: number[] = [];

  for (const digit of set1) {
    if (!set2.has(digit)) res.push(digit);
  }

  return res;
};

const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const store1 = new Set<number>(nums1);
  const store2 = new Set<number>(nums2);
  const answer1 = missedDigits(store1, store2);
  const answer2 = missedDigits(store2, store1);

  return [answer1, answer2];
};

export default findDifference;
