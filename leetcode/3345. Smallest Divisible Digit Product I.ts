const getProduct = (n: number): number => {
  let product = 1;

  while (n) {
    const remainder: number = n % 10;

    product *= remainder;

    n = Math.floor(n / 10);
  }

  return product;
};

const smallestNumber = (n: number, t: number): number => {
  if (getProduct(n) % t === 0) return n;

  return smallestNumber(n + 1, t);
};

export default smallestNumber;
