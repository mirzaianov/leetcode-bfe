const findDisappearedNumbers = (nums: number[]): number[] => {
  const set = new Set<number>(nums);
  const res: number[] = [];

  for (let i = 1; i <= nums.length; i += 1) {
    if (!set.has(i)) res.push(i);
  }

  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
