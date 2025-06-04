const findSpecialInteger = (arr: number[]): number => {
  const len: number = arr.length;

  if (len < 2) return arr[0];

  const target: number = Math.floor(len / 4);
  let count = 1;

  for (let i = 1; i < len; i += 1) {
    if (arr[i] === arr[i - 1]) {
      count += 1;

      if (count > target) return arr[i];
    } else {
      count = 1;
    }
  }

  return count;
};

export default findSpecialInteger;
