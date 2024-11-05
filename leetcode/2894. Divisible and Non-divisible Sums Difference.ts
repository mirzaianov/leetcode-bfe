const differenceOfSums = (n: number, m: number): number => {
  let num1 = 0;
  let num2 = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i % m !== 0) {
      num1 += i;
    } else {
      num2 += i;
    }
  }

  return num1 - num2;
};

export default differenceOfSums;
