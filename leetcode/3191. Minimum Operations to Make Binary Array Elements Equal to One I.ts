const minOperations = (nums: number[]): number => {
  const arr: number[] = [...nums];
  let count = 0;

  for (let i = 0; i < arr.length - 2; i += 1) {
    if (arr[i] === 0) {
      arr[i] = 1;
      arr[i + 1] === 0 ? (arr[i + 1] = 1) : (arr[i + 1] = 0);
      arr[i + 2] === 0 ? (arr[i + 2] = 1) : (arr[i + 2] = 0);
      count += 1;
    }
  }

  if (arr.at(-1) === 0 || arr.at(-2) === 0) return -1;

  return count;
};

export default minOperations;
