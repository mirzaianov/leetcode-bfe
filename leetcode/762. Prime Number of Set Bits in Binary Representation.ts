const isPrimeNumber = (num: number): boolean => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const countBits = (num: number): number => {
  let count = 0;

  while (num) {
    if (num & 1) count += 1;

    num >>= 1;
  }

  return count;
};

const countPrimeSetBits = (left: number, right: number): number => {
  let count = 0;

  for (let i = left; i <= right; i += 1) {
    if (isPrimeNumber(countBits(i))) count += 1;
  }

  return count;
};

export default countPrimeSetBits;
