const sumOddLengthSubarrays = (arr: number[]): number => {
  const len: number = arr.length;
  let sum = 0;

  if (len === 1) return arr[0];

  for (let i = 1; i <= len; i += 2) {
    for (let j = 0; j < len - i + 1; j += 1) {
      sum += arr.slice(j, j + i).reduce((acc, item) => acc + item, 0);
    }
  }

  return sum;
};

export default sumOddLengthSubarrays;
