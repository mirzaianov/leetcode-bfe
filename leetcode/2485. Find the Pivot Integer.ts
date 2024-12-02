const pivotInteger = (n: number): number => {
  let lSum = 0;
  let rSum: number = (n * (n + 1)) / 2;

  for (let i = 1; i <= n; i += 1) {
    lSum += i;

    if (lSum === rSum) return i;

    rSum -= i;
  }

  return -1;
};

export default pivotInteger;
