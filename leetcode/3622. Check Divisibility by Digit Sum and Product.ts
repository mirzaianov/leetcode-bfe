const digitSum = (n: number): number => {
  let sum = 0;

  while (n) {
    const rem: number = n % 10;

    sum += rem;
    n = Math.floor(n / 10);
  }

  return sum;
};

const digitProduct = (n: number): number => {
  if (n === 0) return 0;

  let prod = 1;

  while (n) {
    const rem: number = n % 10;

    prod *= rem;
    n = Math.floor(n / 10);
  }

  return prod;
};

const checkDivisibility = (n: number): boolean => n % (digitSum(n) + digitProduct(n)) === 0;

export default checkDivisibility;
