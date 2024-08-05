const countOnes = (num: number): number => {
  let count = 0;

  while (num) {
    count += num & 1;
    num >>= 1;
  }

  return count;
};

const minOperations = (nums: number[], k: number): number => {
  nums.map((num) => (k ^= num));

  return countOnes(k);
};

export default minOperations;
