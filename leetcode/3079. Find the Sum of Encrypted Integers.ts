const encrypt = (num: number): number => {
  const arr: number[] = num
    .toString()
    .split('')
    .map((item) => Number(item));
  const max: number = Math.max(...arr);

  return Number(arr.map(() => String(max)).join(''));
};

const sumOfEncryptedInt = (nums: number[]): number =>
  nums.reduce((acc, item) => acc + encrypt(item), 0);

export default sumOfEncryptedInt;
