const sumOfMultiples = (n: number): number => {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) sum += i;
  }

  return sum;
};

export default sumOfMultiples;
