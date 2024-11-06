const subtractProductAndSum = (n: number): number => {
  let dividend: number = n;
  let product = 1;
  let sum = 0;

  while (dividend) {
    const remainder: number = dividend % 10;

    product *= remainder;
    sum += remainder;

    dividend = Math.floor(dividend / 10);
  }

  return product - sum;
};

export default subtractProductAndSum;
