const isSymmetricNumber = (n: number): boolean => {
  const arr: number[] = n
    .toString()
    .split('')
    .map((item) => Number(item));
  let leftSum = 0;
  let rightSum = 0;
  let l = 0;
  let r = arr.length - 1;

  if (arr.length % 2 === 0) {
    while (l < r) {
      leftSum += arr[l];
      rightSum += arr[r];

      l += 1;
      r -= 1;
    }

    return leftSum === rightSum;
  }

  return false;
};

const countSymmetricIntegers = (low: number, high: number): number => {
  let count = 0;

  for (let i = low; i <= high; i += 1) {
    if (isSymmetricNumber(i)) count += 1;
  }

  return count;
};

export default countSymmetricIntegers;
