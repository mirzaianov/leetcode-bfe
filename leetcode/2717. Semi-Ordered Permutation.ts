const semiOrderedPermutation = (nums: number[]): number => {
  const len: number = nums.length;
  const firstIndex: number = nums.indexOf(1);
  const lastIndex: number = nums.indexOf(len);

  if (firstIndex === 0 && lastIndex === len - 1) return 0;

  return firstIndex < lastIndex
    ? firstIndex + (len - 1 - lastIndex)
    : firstIndex + (len - 1 - lastIndex) - 1;
};

export default semiOrderedPermutation;
